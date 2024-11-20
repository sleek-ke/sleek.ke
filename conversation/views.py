from django.shortcuts import render, redirect, get_object_or_404
from .models import Conversation, Message, Product
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Notification
from django.db.models import Q


# Create your views here.
@login_required
def notifications_view(request):
    notifications = Notification.objects.filter(seller=request.user)
    buyer_messages = Message.objects.filter(receiver=request.user)
    context = {
        'notifications': notifications,
        'buyer_messages': buyer_messages,
    }
    return render(request, 'notifications.html', context)


@login_required
def conversation(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    seller = product.customer

    # Retrieve the conversation between the buyer and the seller
    conversation = Conversation.objects.filter(
        Q(product=product) & Q(participants=request.user) & Q(participants=seller)
    ).first()

    if request.method == 'POST':
        message_text = request.POST['message']

        if conversation:
            # Create a new message in the conversation
            message = Message.objects.create(
                conversation=conversation,
                sender=request.user,
                receiver=seller,
                message_content=message_text
            )
        else:
            # Create a new conversation and assign it to the message
            conversation = Conversation.objects.create(product=product)
            conversation.participants.add(request.user, seller)
            message = Message.objects.create(
                conversation=conversation,
                sender=request.user,
                receiver=seller,
                message_content=message_text
            )

        Notification.objects.create(seller=seller, buyer=request.user, message=message_text)

        messages.success(request, 'Message sent successfully.')

        return redirect('conversation', product_id=product_id)

    context = {
        'product': product,
        'seller': seller,
        'conversation': conversation,
        'messages': conversation.message_set.all() if conversation else []
    }

    return render(request, 'conversation.html', context)


def reply_message(request, notification_id):
    notification = get_object_or_404(Notification, id=notification_id)
    return render(request, 'reply_message.html', {'notification': notification})


def delete_notification(request, notification_id):
    notification = get_object_or_404(Notification, id=notification_id)
    notification.delete()
    return redirect(request,'notifications')




@login_required
def message_success(request):
    return render(request, 'message_success.html')

def contact_seller_view(request, product_id):
    product = get_object_or_404(Product, pk=product_id)

    if request.method == 'POST':
        message_text = request.POST['message']

        # Create a conversation or get an existing one
        conversation, created = Conversation.objects.get_or_create(product=product)
        conversation.participants.add(request.user)

        # Create a new message in the conversation
        messages = Message.objects.create(sender=request.user, receiver=product.customer, message_content=message_text,
        conversation=conversation)

        # Create a notification for the seller
        Notification.objects.create(seller=product.customer, buyer=request.user, message=message_text)

        messages.success(request, 'Message sent successfully.')

        # Redirect to the conversation page
        return redirect('conversation', product_id=product_id)

    return render(request, 'contact_seller.html', {'product': product})