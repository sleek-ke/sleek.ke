# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from .models import AccessToken, mpesa_transactions


# Register your models here.


admin.site.register(AccessToken)
admin.site.register(mpesa_transactions)


