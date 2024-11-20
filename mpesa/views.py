# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse, JsonResponse
from mpesa.core import MpesaClient
from mpesa.utils import mpesa_config
from django.shortcuts import render

from mpesa.forms import PaymentForm, QueryForm

cl = MpesaClient()
stk_push_callback_url = 'https://api.darajambili.com/express-payment'
b2c_callback_url = 'https://api.darajambili.com/b2c/result'

def index(request):
	return render(request, 'mpesa/Offline.html')


def LowData(request):
	return render(request, 'mpesa/LowData.html')


def post_paybill(request):
	# Use a Safaricom phone number that you have access to, for you to be able to view the prompt.
	global context
	if request.method == 'POST':
		form = PaymentForm(request.POST)
		if form.is_valid():
			phone_number = form.cleaned_data['phone_number']
			amount = form.cleaned_data['amount']
			# amount = form.cleaned_data['amount']
			command_id = 4
			account_reference = form.cleaned_data['account_reference']
			transaction_desc = 'Post Money-Get Paid'
			callback_url = stk_push_callback_url
			response = cl.stk_push_Paybill(phone_number, amount, account_reference, transaction_desc, callback_url, command_id)
			data = response
			print(data)
			context = {'data': data}
		# return HttpResponse(response)
		return render(request, 'plug/posts.html')
	else:
		form = PaymentForm()
	return render(request, 'transactions/transaction_report.html', {'form': form})


def stk_paybill_view(request):
	return render(request, 'mpesa/Pay-Bill.html')


def make_results(request):
	return HttpResponse(response)


def post_paybill_view(request):
	return render(request, 'mpesa/Post_Money.html')


def stk_paybill(request):
	# Use a Safaricom phone number that you have access to, for you to be able to view the prompt.
	global context
	if request.method == 'POST':
		form = PaymentForm(request.POST)
		if form.is_valid():
			phone_number = form.cleaned_data['phone_number']
			amount = form.cleaned_data['amount']
			# amount = form.cleaned_data['amount']
			command_id = 4
			account_reference = form.cleaned_data['account_reference']
			transaction_desc = '+mboa Account Deposit'
			callback_url = stk_push_callback_url
			response = cl.stk_push_Paybill(phone_number, amount, account_reference, transaction_desc, callback_url, command_id)
			data = response
			print(data)
			context = {'data': data}
		return HttpResponse(response)
		# return render(request, 'mpesa/STK-Response.html')
	else:
		form = PaymentForm()
	return render(request, 'transactions/transaction_report.html', {'form': form})

def stk(request):
	# Use a Safaricom phone number that you have access to, for you to be able to view the prompt.
	global context
	if request.method == 'POST':
		form = PaymentForm(request.POST)
		if form.is_valid():
			phone_number = form.cleaned_data['phone_number']
			amount = form.cleaned_data['amount']
			# amount = form.cleaned_data['amount']
			account_reference = '+mboa Account'
			transaction_desc = '+mboa Account Deposit'
			callback_url = stk_push_callback_url
			response = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
			data = response
			print(data)
			context = {'data': data}
		# return HttpResponse(response)
		return render(request, 'mpesa/STK-Response.html')
	else:
		form = PaymentForm()
	return render(request, 'transactions/transaction_report.html', {'form': form})


def Query_stk_push(request):
	global response
	if request.method == 'POST':
		form = QueryForm(request.POST)
		if form.is_valid():
			#phone_number = form.cleaned_data['phone_number']
			# amount = form.cleaned_data['amount']
			checkout_request_id = form.cleaned_data['CheckoutRequestID']
			data = cl.stk_status_query(checkout_request_id)
			response = data
			print(checkout_request_id)
		return JsonResponse(response ,safe=False)
	else:
		form = PaymentForm()
	return render(request, 'mpesa/Query.html', {'form': form})


def oauth_success(request):
	r = cl.access_token()
	return JsonResponse(r, safe=False)


def Ni_Push(request):
	phone_number = '0708534184'
	amount = '20'
	# amount = form.cleaned_data['amount']
	account_reference = '+mboa Account'
	transaction_desc = '+mboa Account Deposit'
	callback_url = stk_push_callback_url
	response = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
	print(response)
	# Use a Safaricom phone number that you have access to, for you to be able to view the prompt.
	return HttpResponse(response)

def stk_push_success(request):
	phone_number = mpesa_config('LNM_PHONE_NUMBER')
	amount = 1
	# amount = form.cleaned_data['amount']
	account_reference = '+mboa'
	transaction_desc = '+mboa Account Deposit'
	callback_url = stk_push_callback_url
	r = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
	return JsonResponse(r.response_description, r, safe=False)

def business_payment_success(request):
	phone_number = mpesa_config('B2C_PHONE_NUMBER')
	amount = 1
	# amount = form.cleaned_data['amount']
	transaction_desc = 'Business Payment Description'
	# occassion = 'Test business payment occassion'
	callback_url = b2c_callback_url
	r = cl.Business_payment(phone_number, amount, transaction_desc, callback_url)
	return HttpResponse(r)

def salary_payment_success(request):
	phone_number = mpesa_config('B2C_PHONE_NUMBER')
	amount = 1
	# amount = form.cleaned_data['amount']
	transaction_desc = 'Salary Payment Description'
	occassion = 'Test salary payment occassion'
	callback_url = b2c_callback_url
	r = cl.salary_payment(phone_number, amount, transaction_desc, callback_url, occassion)
	return JsonResponse(r.response_description, safe=False)

def promotion_payment_success(request):
	# phone_number = mpesa_config('B2C_PHONE_NUMBER')
	phone_number= '0794462494'
	amount = 10
	# amount = form.cleaned_data['amount']
	transaction_desc = 'Promotion Payment Description'
	occassion = 'Test promotion payment occassion'
	callback_url = b2c_callback_url
	command_id = 'PromotionPayment'
	r = cl.promotion_payment(phone_number, amount, transaction_desc, callback_url, occassion,command_id)
	return HttpResponse(r)


def b2c_payment(request):
	if request.method == 'POST':
		form = PaymentForm(request.POST)
		if form.is_valid():
			phone_number = mpesa_config('B2C_PHONE_NUMBER')
			# amount = form.cleaned_data['amount']
			# transaction_desc = form.cleaned_data[ 'transaction_desc' ]
			# occassion = form.cleaned_data[ 'occassion']
			transaction_desc = 'Mboa Academy Token to Skide'
			amount = '70'
			occassion = 'Payment to Client'
			callback_url = b2c_callback_url
			resp = cl.Business_payment(phone_number, amount, transaction_desc, callback_url, occassion)
			return HttpResponse(resp)
		else:
			form = PaymentForm()
		return render(request, 'transactions/transaction_report.html', {'form': form})


def Offline(request):
	return render(request, 'mpesa/Offline.html')


def Balance_till(request):
	# phone_number = mpesa_config('LNM_PHONE_NUMBER')
	# amount = form.cleaned_data['amount']
	initiator = mpesa_config('MPESA_INITIATOR_USERNAME')
	PartyA = mpesa_config('MPESA_SHORTCODE_B')
	Remarks = "ok"
	ResultURL = "http://127.0.0.1:8000/result"
	QueueTimeOutURL = "http://127.0.0.1:8000/queuetimeouturl"
	r = cl.Balance_till(initiator, QueueTimeOutURL, PartyA, Remarks)
	return HttpResponse(r)


def BusinessPayment(request):
	# phone_number = mpesa_config('LNM_PHONE_NUMBER')

	# PartyA = mpesa_config('MPESA_SHORTCODE')
	initiator = mpesa_config('MPESA_INITIATOR_USERNAME')
	amount = '2'       # for  link to a form in templates form.cleaned_data['amount']
	PartyB = '254708534184'
	Remarks = "ok"
	ResultURL = "http://127.0.0.1:8000/result"
	QueueTimeOutURL = "http://127.0.0.1:8000/queuetimeouturl"
	r = cl.Business_payment(initiator, amount, PartyB, Remarks)
	return HttpResponse(r)


def Transaction_status(request):
	# phone_number = mpesa_config('LNM_PHONE_NUMBER')
	# amount = form.cleaned_data['amount']
	initiator = mpesa_config('MPESA_INITIATOR_USERNAME')
	OriginatorConversationID = 'ws_CO_11032024181401772708534184'
	Transaction_ID = 'SCB6PSADPA'
	r = cl.Transaction_status(initiator, Transaction_ID, OriginatorConversationID)
	return HttpResponse(r)

def QRCode(request):
	# phone_number = mpesa_config('LNM_PHONE_NUMBER')
	# amount = form.cleaned_data['amount']
	initiator = mpesa_config('MPESA_INITIATOR_USERNAME')
	Amount = '200'
	Size = 400
	r = cl.Dynamic_QR_Code(initiator, Amount, Size)
	return HttpResponse(r)


def PayBill_QRCode(request):
	# phone_number = mpesa_config('LNM_PHONE_NUMBER')
	# amount = form.cleaned_data['amount']
	initiator = mpesa_config('MPESA_INITIATOR_USERNAME')
	Amount = '200'
	Size = 500
	r = cl.Dynamic_QR_Code(initiator, Amount, Size)
	return HttpResponse(r)


def Business_2_Business_Express_Checkout(request):
	primaryShortCode = mpesa_config('MPESA_EXPRESS_SHORTCODE')
	receiverShortCode = mpesa_config('MPESA_EXPRESS_SHORTCODE_B')
	amount = '200'
	RequestRefID = 'Code-01'
	paymentRef = 'Mboa Savings'
	partnerName = 'Mboa Technologies'
	r = cl.Business_2_Business_Express_Checkout(receiverShortCode, primaryShortCode,  amount, RequestRefID, partnerName, paymentRef)
	return HttpResponse(r)




def autonomy(request):
	Number_Starter = 708534182
	i = 0
	for i in range(5):
		while i > 2:
			add = i
			add_starter = add + i
			Number_Plus = Number_Starter + add_starter
			if Number_Plus == Number_Plus:
				Number_Plus = Number_Starter + add_starter
				print('Your Number Ready Is ... ' + str(Number_Plus))
				phone_number = str(Number_Plus)
				amount = '20'
				# amount = form.cleaned_data['amount']
				account_reference = 'Wall-meat Account'
				transaction_desc = 'Wall-meat Account Deposit'
				callback_url = stk_push_callback_url
				response = cl.stk_push(phone_number, amount, account_reference, transaction_desc,
				                       callback_url)
				print(response)
				print('Your Number On is' + phone_number)
				# Use a Safaricom phone number that you have access to, for you to be able to view the prompt.
				return HttpResponse(response)

		# Number_Plus = Number_Starter + str('4')

