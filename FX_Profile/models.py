from django.db import models
import uuid
from datetime import datetime
from accounts.models import UserAddress, UserBankAccount
from django.db.models.signals import post_save
from accounts.constants import CORTEX_CHOICES, SOCIAL_TYPE_CHOICES


class Charge(models.Model):
    charge_id = models.CharField(max_length=120)
    payment_profile = models.ForeignKey(UserAddress, on_delete=models.CASCADE, default=1, null=True)
    order = models.CharField(max_length=200, blank=True, null=True)
    paid = models.BooleanField(default=False)
    refunded = models.BooleanField(default=False)
    outcome = models.TextField(null=True, blank=True)
    outcome_type = models.CharField(max_length=120, null=True, blank=True)
    seller_message = models.CharField(max_length=120, null=True, blank=True)
    risk_level = models.CharField(max_length=120, null=True, blank=True)
    
    
class Academy(models.Model):
    course = models.CharField(max_length=256)
    Nerd = models.ForeignKey(UserAddress, on_delete=models.CASCADE, default=1, null=True)
    cortex_Name = models.CharField(max_length=100, default='Mboa Technologies')
    cortex_Description = models.TextField(blank=True)
    cortex_image = models.ImageField(upload_to='Cortex', default='blank-profile-picture.png')
    cortex_Duration = models.CharField(max_length=30)
    cortex_Price = models.IntegerField()
    Programming_Language = models.CharField(choices=CORTEX_CHOICES, max_length=50, default='1')
    posted_at = models.DateTimeField(default=datetime.now)


class SocialLinks(models.Model):
    account = models.ForeignKey(UserBankAccount, related_name='SocialLinks', on_delete=models.CASCADE, )
    Social_Account = models.CharField(null=True, max_length=50, blank=True, choices=SOCIAL_TYPE_CHOICES)
    Social_slug = models.SlugField(default=uuid.uuid4)
    Social_Link = models.URLField()


class Books(models.Model):
    Title = models.CharField(max_length=256)
    Programming_Language = models.CharField(choices=CORTEX_CHOICES, max_length=50, default='1')
    Nerd_Auther = models.ForeignKey(UserAddress, on_delete=models.CASCADE, default=1, null=True)
    cortex_Name = models.CharField(max_length=100, default='Mboa Technologies')
    content_Description = models.TextField(blank=True)
    Book_Cover_image = models.ImageField(upload_to='Cortex', default='blank-profile-picture.png')
    Published_on = models.DateTimeField(default=datetime.now)


def charge_post_save_receiver(sender, created, instance, *args, **kwargs):
    if created:
        quantity = int(instance.order.quantity)
        company = instance.payment_profile.user.company
        for v in range(quantity):
            UserAddress.objects.create(user=company)
    post_save.connect(charge_post_save_receiver, sender=Charge)


