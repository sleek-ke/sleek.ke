from django import forms
from accounts.models import UserAddress
from .constants import *
from django.db import transaction
from .models import Item, LABEL_CHOICES, CATEGORY_CHOICES, Order


class CheckoutForm(forms.Form):
	class Meta:
		model = Order
		fields = [
			'user',
			'user_payment_method',
			'user_Mboapay_Balance ',
			'order_instance',
			'private_key',
			'public_key',
			'ref_code',
			'ref_code_confirm',
			' vk',
			'items',
			'coupon',
			'received',
			'being_delivered',
			'start_date',
			'ordered_date',
			'refund_requested',
			'refund_granted',
			'paid',
		]
	
	def __init__(self, *args, **kwargs):
		super().__init__(*args, **kwargs)
		
		for field in self.fields:
			self.fields[field].widget.attrs.update({
				'class': (
					'bty'),
				'style': (
					'width:98%;')
			})
	
	User_Payment_Profile = forms.CharField(required=True)
	Googled_Pin_Location = forms.CharField(required=False)
	Googled_StreetView_Location = forms.CharField(required=False)
	payment_option = forms.ChoiceField(widget=forms.RadioSelect, choices=PAYMENT_CHOICES)


class CouponForm(forms.Form):
	code = forms.CharField(widget=forms.TextInput(attrs={
		'class': 'form-control',
		'placeholder': 'Promo code',
		'aria-label': 'Recipient\'s username',
		'aria-describedby': 'basic-addon2'
	}))


class RefundForm(forms.Form):
	ref_code = forms.CharField()
	message = forms.CharField(widget=forms.Textarea(attrs={
		'rows': 4
	}))
	email = forms.EmailField()
	phone_number = forms.CharField()


class ItemRegistrationForm(forms.Form):
	account_type = forms.ModelChoiceField(queryset=UserAddress.objects.all())
	category = forms.ChoiceField(choices=CATEGORY_CHOICES)
	label = forms.ChoiceField(widget=forms.ChoiceField(choices=LABEL_CHOICES))
	post_date = forms.DateField(widget=forms.SelectDateWidget)
	title = forms.CharField(max_length=100)
	price = forms.FloatField(widget=forms.IntegerField)
	discount_price = forms.FloatField( widget=forms.IntegerField)
	slug = forms.SlugField( )
	description = forms.CharField(widget=forms.Textarea(attrs={'rows': 4}))
	image = forms.ImageField(widget=forms.ImageField)
	date_of_posting = forms.DateTimeField(widget=forms.SplitDateTimeWidget)
	user = forms.ModelChoiceField(queryset=UserAddress.objects.all(), widget=forms.ModelChoiceField(queryset=UserAddress.objects.all()))
	in_Stock = forms.NumberInput( )

	# class Meta:
	# 	model = Item
	# 	extra_kwargs = {"user": {'write_only': True}}
	#
	# def __init__(self, *args, **kwargs):
	# 	super().__init__(*args, **kwargs)
	#
	# 	for field in self.fields:
	# 		self.fields[field].widget.attrs.update({
	# 			'class': (
	# 				'bty'),
	# 			'style': (
	# 				'width:60%;', 'border : 2px solid  #001100')
	# 		})
	#
	# @transaction.atomic
	# def save(self, commit=True):
	# 	user = super().save(commit=False)
	# 	if commit:
	# 		user.save()
	# 		category = self.cleaned_data.get('category')
	# 		label = self.cleaned_data.get('label')
	# 		date_of_posting = self.cleaned_data.get('date_of_posting')
	# 		title = self.cleaned_data.get('title')
	# 		price = self.cleaned_data.get('price')
	# 		discount_price = self.cleaned_data.get('discount_price')
	# 		slug = self.cleaned_data.get('slug')
	# 		description = self.cleaned_data.get('description')
	# 		image = self.cleaned_data.get('image')
	# 		user = self.cleaned_data.get('user')
	# 		in_Stock = self.cleaned_data.get('in_Stock')
	#
	# 		Item.objects.create(
	# 			user=user,
	# 			title=title,
	# 			price=price,
	# 			slug=slug,
	# 			description=description,
	# 			image=image,
	# 			discount_price=discount_price,
	# 			in_Stock=in_Stock,
	# 			category=category,
	# 			lable=label,
	# 			date_of_posting=date_of_posting,
	#
	# 		)
	# 	return user
