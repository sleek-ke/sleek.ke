from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.core.files.storage import default_storage
from django.utils import timezone
import datetime
from accounts.models import User


class Notification(models.Model):
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications_sent')
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications_received', null=True)
    message = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    viewed = models.BooleanField(default=False)

    def __str__(self):
        return self.message


class Message(models.Model):
    conversation = models.ForeignKey('Conversation', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    message_content = models.TextField(default='Default message content')
    created_at = models.DateTimeField(default=timezone.datetime(2023, 7, 15, 12, 0, 0))

    def __str__(self):
        return self.message_content


class Product(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='conversation_products')
    product_name = models.CharField(max_length=255)
    product_description = models.CharField(max_length=500)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.product_name


class Conversation(models.Model):
    participants = models.ManyToManyField(User)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Conversation about {self.product}'
