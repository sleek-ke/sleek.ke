from django.urls import path
from .views import (
    ItemDetailView,
    CheckoutView,
    HomeView,
    DeliveryView,
    OrderSummaryView,
    add_to_cart,
    remove_from_cart,
    remove_single_item_from_cart,
    add_single_item_to_cart,
    PaymentView,
    AddCouponView,
    RequestRefundView,
    ItemPostView,
    Items_upload,
    map,
)

app_name = 'openSoko'

urlpatterns = [
    path('openSoko', HomeView.as_view(), name='openSoko'),
    path('delivery/<user>/<pk>/', DeliveryView.as_view(), name='delivery'),
    path('checkout/', CheckoutView.as_view(), name='checkout'),
    path('order-summary/', OrderSummaryView.as_view(), name='order-summary'),
    path('product/<slug>/', ItemDetailView.as_view(), name='product'),
    path('add-to-cart/<slug>/', add_to_cart, name='add-to-cart'),
    path('add_product', Items_upload, name='add_product'),
    path('add-coupon/', AddCouponView.as_view(), name='add-coupon'),
    path('remove-from-cart/<slug>/', remove_from_cart, name='remove-from-cart'),
    path('remove_single_item_from_cart/<slug>/', remove_single_item_from_cart, name='remove_single_item_from_cart'),
    path('add_single_item_to_cart/<slug>/', add_single_item_to_cart, name='add_single_item_to_cart'),
    path('payment/<payment_option>/', PaymentView.as_view(), name='payment'),
    path('request-refund', RequestRefundView.as_view(), name='request-refund'),
    path('ItemPost/<user>/', ItemPostView.as_view(), name='ItemPost'),
    path('map', map, name='map')
]
