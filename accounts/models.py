from django.contrib.auth.models import AbstractUser

from django.db import models
from .constants import LABEL_CHOICES, GENDER_CHOICES, Cardy_TYPE_CHOICES
from .managers import UserManager
from django.shortcuts import reverse
from datetime import datetime
from .Slug import private_key, public_key
from django.core.validators import (MinValueValidator, MaxValueValidator,
                                    )
from decimal import Decimal
import uuid


class User(AbstractUser):
	username = public_key
	email = models.EmailField(unique=True, null=False, blank=False)

	objects = UserManager( )

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = [ ]

	def __str__(self):
		return self.email

	@property
	def balance(self):
		if hasattr(self, 'account'):
			return self.account.balance
		return 0


class BankAccountType(models.Model):
	name = models.CharField(max_length=128)
	maximum_withdrawal_amount = models.DecimalField(
		decimal_places=2,
		max_digits=12
	)
	annual_interest_rate = models.DecimalField(
		validators=[ MinValueValidator(0), MaxValueValidator(100) ],
		decimal_places=2,
		max_digits=5,
		help_text='Interest rate from 0 - 100'
	)
	interest_calculation_per_year = models.PositiveSmallIntegerField(
		validators=[ MinValueValidator(1), MaxValueValidator(12) ],
		help_text='The number of times interest will be calculated per year'
	)

	def __str__(self):
		return self.name

	def calculate_interest(self, principal):
		"""
		Calculate interest for each account type.

		This uses a basic interest calculation formula
		"""
		p = principal
		r = self.annual_interest_rate
		n_value = self.interest_calculation_per_year
		n = Decimal(n_value)

		# Basic Future Value formula to calculate interest
		interest = (p * (1 + ((r / 100) / n))) - p

		return round(interest, 2)


class UserBankAccount(models.Model):
	user = models.OneToOneField(
		User,
		related_name='account',
		on_delete=models.CASCADE,
	)
	account_type = models.ForeignKey(
		BankAccountType,
		related_name='accounts',
		on_delete=models.CASCADE
	)
	account_no = models.PositiveIntegerField(unique=True)
	gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
	birth_date = models.DateField(null=True, blank=True)
	created_at = models.DateTimeField(auto_now_add=True, null=True)
	balance = models.DecimalField(default=0, max_digits=12, decimal_places=2)
	interest_start_date = models.DateField(null=True, blank=True, help_text=(
		'The month number that interest calculation will start from'
	))
	initial_deposit_date = models.DateField(null=True, blank=True)

	def __str__(self):
		return str(self.account_no)

	def get_interest_calculation_months(self):
		""" List of month numbers for which the interest will be calculated returns [2, 4, 6, 8, 10, 12] for every 2 months interval """
		interval = int(
			12 / self.account_type.interest_calculation_per_year
		)
		start = self.interest_start_date.month
		return [ i for i in range(start, 13, interval) ]


class UserAddress(models.Model):
	year_choice = [ ]
	for r in range(2000, (datetime.now( ).year + 1)):
		year_choice.append((r, r))
	user = models.OneToOneField(User, related_name='address', on_delete=models.CASCADE, )
	stripe_customer_id = models.CharField(max_length=50, blank=True, null=True)
	stripe_charge_id = models.CharField(max_length=50, blank=True, null=True)
	one_click_purchasing = models.BooleanField(default=False)
	delivery_address_default = models.CharField(max_length=200, blank=True, null=True)
	delivery_address_1 = models.CharField(max_length=200, blank=True, null=True)

	cardy = models.CharField(max_length=200, primary_key=False, null=True, default=uuid.uuid4)
	card_account_no = models.PositiveIntegerField(null=True, blank=True)
	brand = models.CharField(max_length=120, null=True, blank=True)
	exp_month = models.IntegerField(null=True, blank=True)
	exp_year = models.IntegerField(null=True, blank=True)
	last4 = models.CharField(max_length=4, null=True, blank=True)
	updated_on = models.DateTimeField(auto_now=True, blank=True, null=True)

	street_address = models.CharField(max_length=512, blank=True, null=True)
	location = models.CharField(max_length=100, blank=True)
	apartment_address = models.CharField(max_length=100, null=True)
	city = models.CharField(max_length=256)
	postal_code = models.PositiveIntegerField(null=True)
	country = models.CharField(max_length=256)
	National_id = models.IntegerField(null=True)
	National_Passport_No = models.IntegerField(null=True)
	Nick_Name = models.CharField(null=True, max_length=20)
	bio = models.TextField(blank=True)
	profileimg = models.ImageField(upload_to='profile_images', default='blank-profile-picture.png')
	label = models.CharField(choices=LABEL_CHOICES, max_length=1, default='1')
	slug = models.SlugField(default=uuid.uuid4)
	private_key = models.CharField(default=private_key, max_length=250,null=True)
	public_key = models.CharField(default=public_key, max_length=250, null=True)
	created_at = models.DateTimeField(auto_now_add=True, null=True)
	Kra_Pin = models.CharField(null=True, max_length=50, blank=True)
	c_image = models.ImageField(upload_to='products_img', default='img/Mboa Academy.jpg')
	p_image = models.ImageField(upload_to='products_img', default='img/Mboa Academy.jpg')

	def __str__(self):
		return self.slug

	def get_absolute_url(self):
		return reverse("users", kwargs={
			'email': self.slug
		})

	def follow_url(self):
		return reverse("wallet", kwargs={
			'email': self.slug
		})


class Official_Cardy(models.Model):
	account = models.ForeignKey(UserBankAccount, related_name='cardy', on_delete=models.CASCADE,)
	cardy_type = models.CharField(null=True, max_length=50, blank=True,
		choices=Cardy_TYPE_CHOICES)
	cardy_number = models.IntegerField(null=True,blank=True,unique=True)
	cardy_label = models.CharField(null=True, max_length=50, blank=True)
	cardy_slug = models.SlugField(default=uuid.uuid4)
	cardy_description = models.TextField(null=True, max_length=50, blank=True)
	timestamp = models.DateTimeField(auto_now_add=True)
	cardy_front_image = models.ImageField(upload_to='cardy_img', default='img/Mboa Academy.jpg')
	cardy_Back_image = models.ImageField(upload_to='cardy_img', default='img/Mboa Academy.jpg')

	def __str__(self):
		return str(self.account)

	class Meta:
		ordering = ['timestamp']
