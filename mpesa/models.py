# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


class AccessToken(models.Model):
	token = models.CharField(max_length=30)
	created_at = models.DateTimeField(auto_now_add=True)
	B_token = models.CharField(max_length=30)

	class Meta:
		get_latest_by = 'created_at'

	def __str__(self):
		return self.token


class mpesa_transactions(models.Model):
	MerchantRequestID = models.CharField(max_length=50, null=True)
	CheckoutRequestID = models.CharField(max_length=50, null=True)
	ResponseCode = models.CharField(max_length=30, null=True)
	ResponseDescription = models.CharField(max_length=30, null=True)
	CustomerMessage = models.CharField(max_length=30, null=True)
	phone_number = models.CharField(max_length=15, null=True)
	amount = models.CharField(max_length=15, null=True)
	paid_at = models.DateTimeField(auto_now_add=True)
	account_reference = models.CharField(max_length=30)
	transaction_desc = models.CharField(max_length=30)
	occassion = models.CharField(max_length=30)
	is_finished = models.BooleanField(default=False)
	is_successful = models.BooleanField(default=False)
	timestamp = models.IntegerField( )
	trans_id = models.CharField(max_length=30)

	class Meta:
		get_latest_by = 'paid_at'

	def __str__(self):
		return self.phone_number

# class B_AccessToken(models.Model):
# 	B_token = models.CharField(max_length=30)
# 	created_at = models.DateTimeField(auto_now_add=True)
#
# 	class Meta:
# 		get_latest_by = 'created_at'
#
# 	def __str__(self):
# 		return self.B_token

