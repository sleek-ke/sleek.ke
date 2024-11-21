import random
import string

import stripe
import segno
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import redirect
from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.contrib.auth import logout
from django.views.generic import ListView, DetailView, View, TemplateView, RedirectView
from .forms import CheckoutForm, CouponForm, RefundForm, ItemRegistrationForm
from .models import Item, OrderItem, Order, Payment, Coupon, Refund
from accounts.models import UserAddress
from sleek_profile.forms import PaymentForm
stripe.api_key = settings.STRIPE_SECRET_KEY


def create_ref_code():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=20))


def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "products.html", context)


def is_valid_form(values):
    valid = True
    for field in values:
        if field == '':
            valid = False
    return valid
  

class CheckoutView(View):
    def get(self, *args, **kwargs):
        user = UserAddress.objects.get(user=self.request.user)
        try:
            order = Order.objects.get(user=user, ordered=False)
            form = CheckoutForm()
            context = {
                'form': form,
                'couponform': CouponForm(),
                'order': order,
                'DISPLAY_COUPON_FORM': True
            }
            return render(self.request, "checkout.html", context)
        except ObjectDoesNotExist:
            messages.info(self.request, "You do not have an active order")
            return redirect("openSoko:checkout")

    def post(self, *args, **kwargs):
        form = CheckoutForm(self.request.POST or None)
        if form.is_valid():
            payment_option = form.cleaned_data.get('payment_option')
            if payment_option == 'S':
                return redirect('openSoko:payment', payment_option='stripe')
            elif payment_option == 'P':
                return redirect('openSoko:payment', payment_option='paypal')
            else:
                messages.warning(
                    self.request, "Invalid payment option selected")
                return redirect('openSoko:checkout')


class PaymentView(View):
    def get(self, *args, **kwargs):
        order = Order.objects.get( ordered=False)
        if order.billing_address:
            context = {
                'order': order,
                'DISPLAY_COUPON_FORM': False,
                'STRIPE_PUBLIC_KEY': settings.STRIPE_PUBLIC_KEY
            }
            # userprofile = self.request.user.first_name
            userprofile = Order.user
            if userprofile.one_click_purchasing:
                # fetch the users card list
                cards = stripe.Customer.list_sources(
                    userprofile.stripe_customer_id,
                    limit=3,
                    object='card'
                )
                card_list = cards['data']
                if len(card_list) > 0:
                    # update the context with the default card
                    context.update({
                        'card': card_list[0]
                    })
            return render(self.request, "payment.html", context)
        else:
            messages.warning(
                self.request, "You have not added a billing address")
            return redirect("openSoko:checkout")

    def post(self, *args, **kwargs):
        order = Order.objects.get(user=self.request.user, ordered=False)
        form = PaymentForm(self.request.POST)
        userprofile = UserAddress.objects.get(user=self.request.user)
        if form.is_valid():
            token = form.cleaned_data.get('stripeToken')
            save = form.cleaned_data.get('save')
            use_default = form.cleaned_data.get('use_default')

            if save:
                if userprofile.stripe_customer_id != '' and userprofile.stripe_customer_id is not None:
                    customer = stripe.Customer.retrieve(
                        userprofile.stripe_customer_id)
                    customer.sources.create(source=token)

                else:
                    customer = stripe.Customer.create(
                        email=self.request.user.email,
                    )
                    customer.sources.create(source=token)
                    userprofile.stripe_customer_id = customer['id']
                    userprofile.one_click_purchasing = True
                    userprofile.save()

            amount = int(order.get_total() * 100)

            try:

                if use_default or save:
                    # charge the customer because we cannot charge the token more than once
                    charge = stripe.Charge.create(
                        amount=amount,  # cents
                        currency="usd",
                        customer=userprofile.stripe_customer_id
                    )
                else:
                    # charge once off on the token
                    charge = stripe.Charge.create(
                        amount=amount,  # cents
                        currency="usd",
                        source=token
                    )

                # create the payment
                payment = Payment()
                payment.stripe_charge_id = charge['id']
                payment.user = self.request.user
                payment.amount = order.get_total()
                payment.save()

                # assign the payment to the order

                order_items = order.items.all()
                order_items.update(ordered=True)
                for item in order_items:
                    item.save()

                order.ordered = True
                order.payment = payment
                order.ref_code = create_ref_code()
                order.save()

                messages.success(self.request, "Your order was successful!")
                return redirect("/")

            except stripe.error.CardError as e:
                body = e.json_body
                err = body.get('error', {})
                messages.warning(self.request, f"{err.get('message')}")
                return redirect("/")

            except stripe.error.RateLimitError as e:
                # Too many requests made to the API too quickly
                messages.warning(self.request, "Rate limit error")
                return redirect("/")

            except stripe.error.InvalidRequestError as e:
                # Invalid parameters were supplied to Stripe's API
                print(e)
                messages.warning(self.request, "Invalid parameters")
                return redirect("/")

            except stripe.error.AuthenticationError as e:
                # Authentication with Stripe's API failed
                # (maybe you changed API keys recently)
                messages.warning(self.request, "Not authenticated")
                return redirect("/")

            except stripe.error.APIConnectionError as e:
                # Network communication with Stripe failed
                messages.warning(self.request, "Network error")
                return redirect("/")

            except stripe.error.StripeError as e:
                # Display a very generic error to the user, and maybe send
                # yourself an email
                messages.warning(
                    self.request, "Something went wrong. You were not charged. Please try again.")
                return redirect("/")

            except Exception as e:
                # send an email to ourselves
                messages.warning(
                    self.request, "A serious error occurred. We have been notifed.")
                return redirect("/")

        messages.warning(self.request, "Invalid data received")
        return redirect("/payment/stripe/")


class HomeView(ListView):
    model = Item
    paginate_by = 48
    template_name = "home.html"


class DeliveryView(DetailView):
    model = Order
    template_name = 'Delivery.html'


def Qr_Code(request, pk):
    user = UserAddress.objects.get(user=request.user)
    ref_code_confirm = Order.ref_code_confirm
    order_qs = Order.objects.filter(user=user, ref_code_confirm=ref_code_confirm, paid=False, ordered=False)
    if order_qs.exists():
        hush = (random.choices(string.ascii_lowercase + string.digits, k=20))
        RefCode = f' {order_qs.ref_code_confirm}'
        QrName = 'Order_Qr/' + RefCode + ".png"
        QrCode_image = segno.make(
            # f'{order_qs.ref_code_confirm}  {RefCode}| {order_qs.start_date}|Mboa-{order_qs.pk}  {pk}|'
            'Mboa Technology --Decentralize Everything',)
        QrCode_image.save('openSoko/Order_Qr/mboa.png', dark='green', scale=5, light='white')
    return render(request, "OrderQrCode.html")


class OrderSummaryView(LoginRequiredMixin, View):
    def get(self, *args, **kwargs):
        user = UserAddress.objects.get(user=self.request.user)
        try:
            order = Order.objects.get(user=user, ordered=False)
            context = {
                'object': order,
                'couponform': CouponForm(),
            }
            return render(self.request, 'order_summary.html', context)
        except ObjectDoesNotExist:
            messages.warning(self.request, "You do not have an active order")
            return redirect("/")


class ItemDetailView(DetailView):
    model = Item
    template_name = "product.html"


@login_required
def add_to_cart(request, slug):
    user = UserAddress.objects.get(user=request.user)
    item = get_object_or_404(Item, slug=slug)
    order_item, created = OrderItem.objects.get_or_create(
        item=item,
        user=user,
        order=False
    )
    order_qs = Order.objects.filter(user=user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        # check if the order item is in the order
        if order.items.filter(item__slug=item.slug).exists():
            order_item.quantity += 1
            order_item.save()
            messages.info(request, "This item quantity was updated.")
            return redirect("core:order-summary")
        else:
            order.items.add(order_item)
            messages.info(request, "This item was added to your cart.")
            return redirect("core:order-summary")
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(ordered_date = ordered_date,
            user=user)
        order.items.add(order_item)
        messages.info(request, "This item was added to your cart.")
        return redirect("core:order-summary")


@login_required
def remove_from_cart(request, slug):
    user = UserAddress.objects.get(user=request.user)
    item = get_object_or_404(Item, slug=slug)
    order_qs = Order.objects.filter(
        user=user,
        ordered=False
    )
    if order_qs.exists():
        order = order_qs[0]
        # check if the order item is in the order
        if order.items.filter(item__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                item=item,
                user=user,
                ordered=False
            )[0]
            order.items.remove(order_item)
            order_item.delete()
            messages.info(request, "This item was removed from your cart.")
            return redirect("core:order-summary")
        else:
            messages.info(request, "This item was not in your cart")
            return redirect("core:product", slug=slug)
    else:
        messages.info(request, "You do not have an active order")
        return redirect("core:product", slug=slug)


@login_required
def remove_single_item_from_cart(request, slug):
    user = UserAddress.objects.get(user=request.user)
    item = get_object_or_404(Item, slug=slug)
    order_qs = Order.objects.filter(
        user=user,
        ordered=False
    )
    if order_qs.exists():
        order = order_qs[0]
        # check if the order item is in the order
        if order.items.filter(item__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                item=item,
                user=user,
                ordered=False
            )[0]
            if order_item.quantity > 1:
                order_item.quantity -= 1
                order_item.save()
            else:
                order.items.remove(order_item)
            messages.info(request, "This item quantity was updated.")
            return redirect("core:order-summary")
        else:
            messages.info(request, "This item was not in your cart")
            return redirect("core:product", slug=slug)
    else:
        messages.info(request, "You do not have an active order")
        return redirect("core:product", slug=slug)


@login_required
def add_single_item_to_cart(request, slug):
    user = UserAddress.objects.get(user=request.user)
    item = get_object_or_404(Item, slug=slug)
  
    order_qs = Order.objects.filter(user=user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        # check if the order item is in the order
        if order.items.filter(item__slug=item.slug).exists():
            order_item, created = OrderItem.objects.get_or_create(
                user=user,
                item=item,
                ordered=False
            )
            order_item.quantity += 1
            order_item.save()
            order.items.add(order_item)
            messages.info(request, f"{item.title} quantity  updated.")
            return redirect("core:order-summary")
    else:

        messages.info(request, f"{item.title} added to your cart.")
        return redirect("core:order-summary")


def get_coupon(request, code):
    try:
        coupon = Coupon.objects.get(code=code)
        return coupon
    except ObjectDoesNotExist:
        messages.info(request, "This coupon does not exist")
        return redirect("core:checkout")


class AddCouponView(View):
    def post(self, *args, **kwargs):
        form = CouponForm(self.request.POST or None)
        if form.is_valid():
            try:
                code = form.cleaned_data.get('code')
                order = Order.objects.get(
             ordered=False)
                order.coupon = get_coupon(self.request, code)
                order.save()
                messages.success(self.request, "Successfully added coupon")
                return redirect("openSoko:checkout")
            except ObjectDoesNotExist:
                messages.info(self.request, "You do not have an active order")
                return redirect("openSoko:checkout")


class RequestRefundView(View):
    def get(self, *args, **kwargs):
        form = RefundForm()
        context = {
            'form': form
        }
        return render(self.request, "request_refund.html", context)

    def post(self, *args, **kwargs):
        form = RefundForm(self.request.POST)
        if form.is_valid():
            ref_code = form.cleaned_data.get('ref_code')
            message = form.cleaned_data.get('message')
            email = form.cleaned_data.get('email')
            phone_Number = form.cleaned_data.get('phone_number')
            # edit the order
            try:
                order = Order.objects.get(ref_code=ref_code)
                order.refund_requested = True
                order.save()

                # store the refund
                refund = Refund()
                refund.order = order
                refund.reason = message
                refund.email = email
                refund.phone_number = phone_Number
                refund.save()

                messages.info(self.request, "Your request was received successfully.")
                return redirect("openSoko:request-refund")

            except ObjectDoesNotExist:
                messages.info(self.request, "This order does not exist.Check Ref Code and try again")
                return redirect("openSoko:request-refund")

@login_required
def Items_upload(request):
    if request.method == 'POST':
        user_posting = UserAddress.objects.get(user=request.user)
        item = Item.objects.all()
        phone_number = request.POST['postal_code']
        title = request.POST['title']
        slug = request.POST['slug']
        description = request.POST['description']
        price = request.POST['price']
        label = request.POST['label']
        in_Stock = request.POST['in_Stock']
        category = request.POST['category']
        image = request.FILES.get('image_upload')

        new_post = Item.objects.create(phone_number=phone_number, item=item, description=description, slug=slug, title=title,  price=price, label=label, user=user_posting, image=image, in_Stock=in_Stock, category=category)
        new_post.save()
        messages.info(request, "Your Item was received successfully.Pending Approval")
        return render(request, 'add_product.html')
    else:
        return render(request, 'add_product.html')


class ItemPostView(View):
    def get(self, *args, **kwargs):
        form = ItemRegistrationForm()
        context = {
            'form': form
        }
        return render(self.request, "add_product.html", context)

    @login_required
    def post(self, *args, **kwargs):
        form = ItemRegistrationForm(self.request.POST)
        if form.is_valid():
            user_posting = UserAddress.objects.get(user=self.request.user)
            item = Item.objects.all()
            phone_number = form.cleaned_data.get[ 'postal_code' ]
            title = form.cleaned_data.get[ 'title' ]
            slug = form.cleaned_data.get[ 'slug' ]
            description = form.cleaned_data.get[ 'description' ]
            price = form.cleaned_data.get[ 'price' ]
            label = form.cleaned_data.get[ 'label' ]
            in_Stock = form.cleaned_data.get[ 'in_Stock' ]
            category = form.cleaned_data.get[ 'category' ]
            image = form.cleaned_data.get('image_upload')
            # edit the order
            try:
                new_post = Item.objects.create(phone_number=phone_number, item=item, description=description, slug=slug,
                                               title=title, price=price, label=label, user=user_posting, image=image,
                                               in_Stock=in_Stock, category=category)
                new_post.save()
                messages.info(self.request, "Your request was received successfully.")
                return redirect("openSoko:ItemPost")

            except ObjectDoesNotExist:
                messages.info(self.request, "This order does not exist.Check Ref Code and try again")
                return redirect("openSoko:ItemPost")


class Not_Paid(RedirectView):
    pattern_name = 'dashboard'

    def get_redirect_url(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            logout(self.request)
        return super().get_redirect_url(*args, **kwargs)



@login_required(login_url='/accounts/login')
def map(request):
    return render(request, 'map/map.html')