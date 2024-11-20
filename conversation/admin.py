from django.contrib import admin
from .models import Notification, Message, Conversation, Product

admin.site.register(Notification)
admin.site.register(Message)
admin.site.register(Conversation)
admin.site.register(Product)

