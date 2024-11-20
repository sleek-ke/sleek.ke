from django.contrib import messages
from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.views import LoginView
from django.shortcuts import HttpResponseRedirect
from django.urls import reverse_lazy
from django.views.generic import TemplateView, RedirectView
from django.contrib.auth.decorators import login_required
from .forms import UserRegistrationForm, UserAddressForm, SocialAccountsForm
from django.shortcuts import render, redirect
from .models import UserAddress, Official_Cardy
from django.views.generic import ListView, DetailView, View, TemplateView, RedirectView
from django.core.exceptions import ObjectDoesNotExist

from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView, ListView
User = get_user_model()


class UserRegistrationView(TemplateView):
    model = User
    form_class = UserRegistrationForm
    template_name = 'accounts/user_registration.html'

    def dispatch(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            return HttpResponseRedirect(
                reverse_lazy('accounts:ex_setting')
            )
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        registration_form = UserRegistrationForm(self.request.POST)
        address_form = UserAddressForm(self.request.POST)

        if registration_form.is_valid() and address_form.is_valid():
            user = registration_form.save()
            address = address_form.save(commit=False)
            address.user = user
            address.save()

            login(self.request, user)
            messages.success(
                self.request,
                (
                    f"You've  Made a Great Choice   {user.first_name}, Thanks For Joining MboaEx We Generating Your Mboa-ID . "
                    f'Stay Belong and Enjoy the Experience'
                )
            )
            messages.success(
                self.request,
                (f'Your Super Mboa-ID  is {user.account.account_no}.   '
                 f'safely deposit funds via M-Pesa to your account now')
            )
            return HttpResponseRedirect(
                reverse_lazy('accounts:ex_setting')
            )

        return self.render_to_response(
            self.get_context_data(
                registration_form=registration_form,
                address_form=address_form
            )
        )

    def get_context_data(self, **kwargs):
        if 'registration_form' not in kwargs:
            kwargs['registration_form'] = UserRegistrationForm()
        if 'address_form' not in kwargs:
            kwargs['address_form'] = UserAddressForm()

        return super().get_context_data(**kwargs)


class UserLoginView(LoginView):
    template_name = 'accounts/user_login.html'
    redirect_authenticated_user = True


class LogoutView(RedirectView):
    pattern_name = 'dashboard'
    
    def get_redirect_url(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            logout(self.request)
        return super().get_redirect_url(*args, **kwargs)


@login_required(login_url='/accounts/login')
def Sure_kuleft(request):
    if request.user.is_anonymous:
        return redirect('user_login.html')
    return render(request, 'accounts/user_logout.html')


@login_required(login_url='/accounts/login')
def ex_setting(request):
    user_profile = UserAddress.objects.get(user=request.user)
    
    if request.method == 'POST':
        
        if request.FILES.get('image') is None:
            image = user_profile.profileimg
            bio = request.POST['bio']
            National_id = request.POST['National_id']
            National_Passport_No = request.POST['National_Passport_No']
            Kra_Pin = request.POST['Kra_Pin']
            apartment_address = request.POST['apartment_address']
            location = request.POST['location']
            Nick_Name = request.POST['Nick_Name']
            postal_code = request.POST['postal_code']
            
            user_profile.profileimg = image
            user_profile.Nick_Name = Nick_Name
            user_profile.bio = bio
            user_profile.National_id = National_id
            user_profile.National_Passport_No = National_Passport_No
            user_profile.Kra_Pin = Kra_Pin
            user_profile.postal_code = postal_code
            user_profile.location = location
            user_profile.apartment_address = apartment_address
            user_profile.save()
        if request.FILES.get('image') != None:
            image = request.FILES.get('image')
            bio = request.POST['bio']
            National_id = request.POST['National _id']
            National_Passport_No = request.POST['National_Passport_No']
            Kra_Pin = request.POST['Kra_Pin']
            postal_code = request.POST['postal_code']
            location = request.POST['location']
            apartment_address = request.POST['apartment_address']
            Nick_Name = request.POST['Nick_Name']
            
            user_profile.profileimg = image
            user_profile.postal_code = postal_code
            user_profile.bio = bio
            user_profile.National_id = National_id
            user_profile.National_Passport_No = National_Passport_No
            user_profile.Kra_Pin = Kra_Pin
            user_profile.location = location
            user_profile.apartment_address = apartment_address
            user_profile.Nick_Name = Nick_Name
            user_profile.save()
        
        return render(request, 'fx/setting.html')
    return render(request, 'fx/ex_setting.html', {'user_profile': user_profile})


class ProfileDetailView(DetailView):
    model = UserAddress
    template_name = "plug/profile.html"


class CardyCreateMixin(ListView):
    template_name = 'fx/Mboa-Id.html'
    model = Official_Cardy
    form_class = SocialAccountsForm
    success_url = reverse_lazy('accounts:cardy')


class CardyView(View):
    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs.update({
            'account': self.request.user.account
        })
        return kwargs

    def get(self, *args, **kwargs):
        form = SocialAccountsForm()
        context = {
            'form': form
        }
        return render(self.request, "accounts/socials.html", context)

    def post(self, request, *args, **kwargs):
        form = SocialAccountsForm(self.request.POST)
        if form.is_valid():
            account = form.cleaned_data.get('account')
            cardy_type = form.cleaned_data.get()
            cardy_number = form.cleaned_data.get('cardy_number')
            cardy_label = form.cleaned_data.get('cardy_label')
            cardy_slug = form.cleaned_data.get('cardy_slug')
            cardy_description = form.cleaned_data.get('cardy_description')
            timestamp = form.cleaned_data.get('timestamp')
            cardy_front_image = form.cleaned_data.get('cardy_front_image')
            cardy_Back_image = form.cleaned_data.get('cardy_Back_image')
            try:
                user_cardy_account = UserAddress.objects.get(user=self.request.user.account)
                social_cardy_account = SocialAccountsForm.objects.get(account=self.request.user)
                if user_cardy_account.account == social_cardy_account.account:
                    house_of_cards = Official_Cardy()
                    house_of_cards.account = account
                    house_of_cards.cardy_number = cardy_number
                    house_of_cards.cardy_slug = cardy_slug
                    house_of_cards.timestamp = timestamp
                    house_of_cards.cardy_label = cardy_label
                    house_of_cards.cardy_description = cardy_description
                    house_of_cards.cardy_type = cardy_type
                    house_of_cards.cardy_front_image = cardy_front_image
                    house_of_cards.cardy_Back_image = cardy_Back_image
                    house_of_cards.save()
                    messages.warning(self.request, "You have not added another cardy Yet")
                    return redirect("accounts:cards")
            except ObjectDoesNotExist:
                messages.info(self.request, "Invalid Mboa-Id ")
        return self.render_to_response(
            self.get_context_data(
                socials_form=form
            )
        )

    def get_context_data(self, **kwargs):
        if 'socials_form' not in kwargs:
            kwargs['socials_form'] = SocialAccountsForm()
        return super().get_context_data(**kwargs)
