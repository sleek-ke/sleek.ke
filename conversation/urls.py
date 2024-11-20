from django.urls import path

from conversation.views import (
    notifications_view, conversation,  reply_message,
    delete_notification, contact_seller_view, message_success
)

app_name = 'conversation'

urlpatterns = [

    
    path('notifications/', notifications_view, name='notifications'),
    path('reply/<int:notification_id>/', reply_message, name='reply_message'),
    path('delete_notification/<int:notification_id>/', delete_notification, name='delete_notification'),
    path('message_success/', message_success, name='message_success'),
    path('contact_seller/<int:product_id>/', contact_seller_view, name='contact_seller'),
    path('<int:product_id>/', conversation, name='conversation'),
]
