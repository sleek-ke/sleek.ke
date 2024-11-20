from django.db import models
from django.shortcuts import reverse
from accounts.models import UserAddress

# from django_countries.fields import CountryField
from .constants import CATEGORY_CHOICES, LABEL_CHOICES
from openSoko.order import private_key, public_key


class Item(models.Model):
	title = models.CharField(max_length=100)
	price = models.FloatField( )
	discount_price = models.FloatField(blank=True, null=True)
	category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
	label = models.CharField(choices=LABEL_CHOICES, max_length=1)
	slug = models.SlugField( )
	description = models.TextField( )
	image = models.ImageField(upload_to='Items_images', default='Mboa Academy.jpg')
	plug_posting = models.DateTimeField(null=True)
	user = models.ForeignKey(UserAddress, on_delete=models.CASCADE, null=True)
	date_of_posting = models.DateTimeField(auto_now_add=True, blank=True, null=True)
	in_Stock = models.IntegerField(default=1, blank=True, null=True)
	sold_out = models.IntegerField(default=0, blank=True, null=True)

	def __str__(self):
		return self.title

	def get_absolute_url(self):
		return reverse("openSoko:product", kwargs={
			'slug': self.slug
		})

	def get_add_to_cart_url(self):
		return reverse("openSoko:add-to-cart", kwargs={
			'slug': self.slug
		})

	def get_remove_from_cart_url(self):
		return reverse("openSoko:remove-from-cart", kwargs={
			'slug': self.slug
		})


class OrderItem(models.Model):
	user = models.ForeignKey(UserAddress, on_delete=models.CASCADE, null=True, blank=True)
	ordered = models.BooleanField(default=False)
	item = models.ForeignKey(Item, on_delete=models.CASCADE)
	quantity = models.IntegerField(default=1)

	def __str__(self):
		return f"{self.quantity} of {self.item.title}"

	def get_total_item_price(self):
		return self.quantity * self.item.price

	def get_total_discount_item_price(self):
		return self.quantity * self.item.discount_price

	def get_amount_saved(self):
		return self.get_total_item_price( ) - self.get_total_discount_item_price( )

	def get_final_price(self):
		if self.item.discount_price:
			return self.get_total_discount_item_price( )
		return self.get_total_item_price( )


class Order(models.Model):
	user = models.ForeignKey(UserAddress, on_delete=models.CASCADE, null=True, blank=True)
	ref_code = models.CharField(default=public_key, max_length=200, blank=True, null=False)
	ref_code_confirm = models.CharField(default=private_key, max_length=200, blank=True, null=False)
	items = models.ManyToManyField(OrderItem)
	start_date = models.DateTimeField(auto_now_add=True)
	ordered_date = models.DateTimeField( )
	ordered = models.BooleanField(default=False)
	payment = models.ForeignKey('Payment', on_delete=models.SET_NULL, blank=True, null=True)
	paid = models.BooleanField(default=False)
	coupon = models.ForeignKey('Coupon', on_delete=models.SET_NULL, blank=True, null=True)
	being_delivered = models.BooleanField(default=False)
	received = models.BooleanField(default=False)
	refund_requested = models.BooleanField(default=False)
	refund_granted = models.BooleanField(default=False)
	QrCode_image = models.ImageField(upload_to='Order_Qr', default='Mboa Academy.jpg')

	def get_total(self):
		total = 0
		for order_item in self.items.all( ):
			total += order_item.get_final_price( )
		if self.coupon:
			total -= self.coupon.amount
		return total

	def __str__(self):
		return f"{self.pk}"


class Payment(models.Model):
	user = models.ForeignKey(UserAddress, on_delete=models.CASCADE, null=True, blank=True)
	# user = models.ForeignKey(User_Payment_Profile, on_delete=models.SET_NULL, blank=True, null=True)
	amount = models.FloatField( )
	Payment_method = models.CharField(max_length=10, null=True)
	timestamp = models.DateTimeField(auto_now_add=True)
	order_inline = models.CharField(max_length=200, null=True)

	def __str__(self):
		return self.timestamp


class Coupon(models.Model):
	code = models.CharField(max_length=15)
	amount = models.FloatField( )
	user = models.ForeignKey(UserAddress, on_delete=models.CASCADE, null=True, blank=True)

	def __str__(self):
		return self.code


class Refund(models.Model):
	# user_order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True, blank=False)
	reason = models.TextField( )
	accepted = models.BooleanField(default=False)
	email = models.EmailField( )
	user = models.ForeignKey(UserAddress, on_delete=models.CASCADE, null=True, blank=True)
	phone_number = models.CharField(blank=True, null=True, max_length=15)
	Order = models.ForeignKey(Order, on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.pk}"
