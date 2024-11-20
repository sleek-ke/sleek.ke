from django.contrib import admin

from .models import Item, OrderItem, Order, Payment, Coupon, Refund


def make_refund_accepted(modeladmin, request, queryset):
    queryset.update(refund_requested=False, refund_granted=True)


make_refund_accepted.short_description = 'Update orders to refund granted'


class OrderAdmin(admin.ModelAdmin):
    list_display = ['user',
                    'ordered',
                    'ref_code_confirm',
                    'ref_code',
                    'ordered_date',
                    'being_delivered',
                    'received',
                    'refund_requested',
                    'refund_granted',
                    'payment',
                    'coupon'
                    ]
    list_display_links = [
        'user',
        'ref_code_confirm',
        'refund_requested',
        'payment',
        'coupon'
    ]
    list_filter = ['ordered',
                   'being_delivered',
                   'received',
                   'refund_requested',
                   'refund_granted']
    search_fields = [
        'user',
        'ref_code'
        'ref_code_confirm',
    ]
    actions = [make_refund_accepted]
    

admin.site.register(Item)
admin.site.register(OrderItem)
admin.site.register(Order, OrderAdmin)
admin.site.register(Payment)
admin.site.register(Coupon)
admin.site.register(Refund)
