from django.urls import re_path as url, include, path
from . import views

test_patterns = [
	url(r'^$', views.index, name='django_daraja_index'),
	url(r'^oauth/success', views.oauth_success, name='test_oauth_success'),
	url(r'^stk-push/success', views.stk_push_success, name='test_stk_push_success'),
	url(r'^business-payment/success', views.business_payment_success, name='test_business_payment_success'),
	url(r'^salary-payment/success', views.salary_payment_success, name='test_salary_payment_success'),
	url(r'^promotion-payment/success', views.promotion_payment_success, name='test_promotion_payment_success'),
]

urlpatterns = [
	url(r'^$', views.index, name='index'),
	path('stk', views.stk, name='stk'),
	path('stk-pay-bill', views.stk_paybill, name='stk-pay-bill'),
	path('post-pay-bill', views.post_paybill, name='post-pay-bill'),
	path('pay-bill', views.stk_paybill_view, name='pay-bill'),
	path('pochi/stk', views.stk, name='pochi_stk'),
	url(r'^tests/', include(test_patterns)),
	url(r'^oauth/success', views.oauth_success, name='test_oauth_success'),
	url('Offline', views.Offline, name='offline'),
	url('Results', views.make_results, name='Results'),
	url('Query_stk_push', views.Query_stk_push, name='Query_stk_push'),
	path('b2c', views.b2c_payment, name='b2c_payment'),
	path('QRCode', views.QRCode, name='QRCode'),
	path('PayBill_QRCode', views.PayBill_QRCode, name='PayBill_QRCode'),
	path('B2B', views.Business_2_Business_Express_Checkout, name='B2B_Express'),
	path('Balance', views.Balance_till, name='Balance'),
	path('BusinessPayment', views.BusinessPayment, name='BusinessPayment'),
	path('Ni_Push', views.Ni_Push, name='Ni_Push'),
	path('LowData', views.LowData, name='LowData'),
	path('autonomy', views.autonomy, name='autonomy'),
	path('Transaction_status', views.Transaction_status, name='Transaction_status'),
	url(r'^stk-push/success', views.stk_push_success, name='test_stk_push_success'),
	url(r'^business-payment/success', views.business_payment_success, name='test_business_payment_success'),
	url(r'^salary-payment/success', views.salary_payment_success, name='test_salary_payment_success'),
	url(r'^promotion-payment/success', views.promotion_payment_success, name='test_promotion_payment_success'),
]
