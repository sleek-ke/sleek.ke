# import base64
from datetime import datetime
import json
from mpesa.exceptions import MpesaInvalidParameterException
# from .utils import encrypt_security_credential, mpesa_access_token, format_phone_number, api_base_url, mpesa_config, mpesa_response
from mpesa.utils import *


# from decouple import config

class MpesaClient:
	"""
	This is the Duka MPESA client.

	The Mpesa Client will access all interactions with the MPESA Daraja API.
	"""

	auth_token = ''

	def __init__(self):
		"""
		The constructor for MpesaClient class
		"""

	def access_token(self):
		"""
		Generate an OAuth access token.

		Returns:
			bool: A string containg a valid OAuth access token
		"""

		return mpesa_access_token( )

	def parse_stk_result(self, result):
		"""
		Parse the result of Lipa na MPESA Online Payment (STK Push)

		Returns:
			The result data as an array
		"""

		payload = json.loads(result)
		data = { }
		callback = payload[ 'Body' ][ 'stkCallback' ]
		data[ 'ResultCode' ] = callback[ 'ResultCode' ]
		data[ 'ResultDesc' ] = callback[ 'ResultDesc' ]
		data[ 'MerchantRequestID' ] = callback[ 'MerchantRequestID' ]
		data[ 'CheckoutRequestID' ] = callback[ 'CheckoutRequestID' ]
		data[ 'ResponseCode' ] = callback[ 'ResponseCode' ]
		data[ 'ResponseDescription' ] = callback[ 'ResponseDescription' ]
		data[ 'ResultCode' ] = callback[ 'ResultCode' ]
		data[ 'ResultDesc' ] = callback[ 'ResultDesc' ]

		metadata = callback.get('CallbackMetadata')
		if metadata:
			metadata_items = metadata.get('Item')
			for item in metadata_items:
				data[ item[ 'Name' ] ] = item.get('Value')

		return data

	def stk_push_Paybill(self, phone_number, amount, account_reference, transaction_desc, callback_url, command_id):

		if str(account_reference).strip() == '':
			raise MpesaInvalidParameterException('Account reference cannot be blank')
		if str(transaction_desc).strip() == '':
			raise MpesaInvalidParameterException('Transaction description cannot be blank')
		if str(amount).strip() == '':
			raise MpesaInvalidParameterException('Account reference cannot be blank')

		phone_number = format_phone_number(phone_number)
		url = api_base_url( ) + 'mpesa/stkpush/v1/processrequest'
		passkey = mpesa_config('MPESA_PASSKEY_B')
		business_short_code = mpesa_config('MPESA_SHORTCODE_B')

		timestamp = datetime.now( ).strftime('%Y%m%d%H%M%S')
		password = base64.b64encode((business_short_code + passkey + timestamp).encode('ascii')).decode('utf-8')
		transaction_type = "CustomerPayBillOnline"
		command_id = command_id
		party_a = phone_number
		party_b = business_short_code

		data = {
			'BusinessShortCode': business_short_code,
			'Password': password,
			'Timestamp': timestamp,
			'TransactionType': transaction_type,
			'Command_ID': command_id,
			'Amount': amount,
			'PartyA': party_a,
			'PartyB': party_b,
			'PhoneNumber': phone_number,
			'CallBackURL': callback_url,
			'AccountReference': account_reference,
			'TransactionDesc': transaction_desc
		}

		headers = {
			'Authorization': 'Bearer ' + B_mpesa_access_token(),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))


	def stk_push(self, phone_number, amount, account_reference, transaction_desc, callback_url):

		if str(account_reference).strip() == '':
			raise MpesaInvalidParameterException('Account reference cannot be blank')
		if str(transaction_desc).strip() == '':
			raise MpesaInvalidParameterException('Transaction description cannot be blank')
		if str(amount).strip() == '':
			raise MpesaInvalidParameterException('Account reference cannot be blank')

		phone_number = format_phone_number(phone_number)
		url = api_base_url( ) + 'mpesa/stkpush/v1/processrequest'
		passkey = mpesa_config('MPESA_PASSKEY')
		MyMpesaTillNumber = mpesa_config('MY_MPESA_TILL_NUMBER')

		mpesa_environment = mpesa_config('MPESA_ENVIRONMENT')
		if mpesa_environment == 'sandbox':
			business_short_code = mpesa_config('MPESA_EXPRESS_SHORTCODE')
		else:
			business_short_code = mpesa_config('MPESA_SHORTCODE')

		timestamp = datetime.now( ).strftime('%Y%m%d%H%M%S')
		password = base64.b64encode((business_short_code + passkey + timestamp).encode('ascii')).decode('utf-8')
		transaction_type = 'CustomerBuyGoodsOnline'
		party_a = phone_number
		party_b = MyMpesaTillNumber

		data = {
			'BusinessShortCode': business_short_code,
			'Password': password,
			'Timestamp': timestamp,
			'TransactionType': transaction_type,
			'Amount': amount,
			'PartyA': party_a,
			'PartyB': party_b,
			'PhoneNumber': phone_number,
			'CallBackURL': callback_url,
			'AccountReference': account_reference,
			'TransactionDesc': transaction_desc
		}

		headers = {
			'Authorization': 'Bearer ' + mpesa_access_token(),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def stk_status_query(self, CheckoutRequestID):
		if str(CheckoutRequestID).strip( ) == '':
			raise MpesaInvalidParameterException('Checkout Request ID cannot be blank')

		timestamp = datetime.now( ).strftime('%Y%m%d%H%M%S')
		url = api_base_url( ) + 'mpesa/stkpushquery/v1/query'
		business_short_code = mpesa_config('MPESA_SHORTCODE')
		initiator_security_credential = encrypt_security_credential(mpesa_config('MPESA_INITIATOR_SECURITY_CREDENTIAL'))
		CheckoutRequestID = CheckoutRequestID
		data = {
			'BusinessShortCode': business_short_code,
			'Password': initiator_security_credential,
			'Timestamp': timestamp,
			'CheckoutRequestID': CheckoutRequestID,
		}

		headers = {
			'Authorization': 'Bearer ' + mpesa_access_token( ),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def b2c_payment(self, phone_number, amount, transaction_desc, QueueTimeOutURL, ResultURL):

		if str(transaction_desc).strip( ) == '':
			raise MpesaInvalidParameterException('Transaction description cannot be blank')
		if not isinstance(amount, int):
			raise MpesaInvalidParameterException('Amount must be an integer')

		phone_number = format_phone_number(phone_number)
		url = api_base_url( ) + 'mpesa/b2c/v3/paymentrequest'

		business_short_code = mpesa_config('MPESA_SHORTCODE_B')

		party_a = business_short_code
		party_b = phone_number
		initiator_username = mpesa_config('MPESA_INITIATOR_USERNAME')
		initiator_security_credential = encrypt_security_credential(mpesa_config('MPESA_INITIATOR_SECURITY_CREDENTIAL'))

		data = {
			'InitiatorName': initiator_username,
			'SecurityCredential': initiator_security_credential,
			"CommandID": "BusinessPayToBulk",
			'SenderIdentifierType': "4",
			'RecieverIdentifierType': "4",
			'Amount': amount,
			'PartyA': party_a,
			'PartyB': party_b,
			'Requester': "254708534184",
			'Remarks': transaction_desc,
			'ResultURL': ResultURL,
			'QueueTimeOutURL': QueueTimeOutURL,

		}

		headers = {
			'Authorization': 'Bearer ' + mpesa_access_token( ),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def promotion_payment(self, phone_number, amount, transaction_desc, callback_url, occassion, command_id):

		if str(transaction_desc).strip( ) == '':
			raise MpesaInvalidParameterException('Transaction description cannot be blank')
		if not isinstance(amount, int):
			raise MpesaInvalidParameterException('Amount must be an integer')

		phone_number = format_phone_number(phone_number)
		url = api_base_url( ) + 'mpesa/b2c/v3/paymentrequest'

		business_short_code = mpesa_config('MPESA_SHORTCODE')

		party_a = business_short_code
		party_b = phone_number
		initiator_username = mpesa_config('MPESA_INITIATOR_USERNAME')
		initiator_security_credential = encrypt_security_credential(mpesa_config('MPESA_INITIATOR_SECURITY_CREDENTIAL'))
		command_id = 'PromotionPayment'
		data = {
			'InitiatorName': initiator_username,
			'SecurityCredential': initiator_security_credential,
			'CommandID': command_id,
			'Amount': amount,
			'PartyA': party_a,
			'PartyB': party_b,
			'Remarks': transaction_desc,
			'QueueTimeOutURL': callback_url,
			'ResultURL': callback_url,
			'Occassion': occassion
		}

		headers = {
			'Authorization': 'Bearer ' + mpesa_access_token( ),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def Dynamic_QR_Code(self, amount, Size, initiator):
		# phone_number = format_phone_number(phone_number)
		url = api_base_url( ) + 'mpesa/qrcode/v1/generate'

		business_short_code = mpesa_config('MPESA_SHORTCODE')
		initiator_username = initiator
		Size = Size
		amount = 4900
		command_id = 4
		data = {
			'MerchantName': initiator_username,
			'RefNo': command_id,
			'Amount': amount,
			'TrxCode': 'BG',
			'CPI': business_short_code,
			'Size': Size,
		}

		headers = {
			'Authorization': 'Bearer ' + mpesa_access_token( ),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def PayBill_QR_Code(self, amount, Size, initiator):
		# phone_number = format_phone_number(phone_number)
		url = api_base_url( ) + 'mpesa/qrcode/v1/generate'

		business_short_code = mpesa_config('MPESA_SHORTCODE_B')
		initiator_username = initiator
		Size = Size
		amount = amount
		command_id = 4
		data = {
			'MerchantName': initiator_username,
			'RefNo': command_id,
			'Amount': amount,
			'TrxCode': 'BG',
			'CPI': business_short_code,
			'Size': Size,
		}

		headers = {
			'Authorization': 'Bearer ' + B_mpesa_access_token(),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def Balance_till(self, initiator, Remarks, ResultsURL, QueueTimeOutURL):

		Initiator = initiator
		IdentifierType = 4
		Command_ID = 'AccountBalance'
		url = api_base_url() + 'mpesa/accountbalance/v1/query'
		passkey = mpesa_config('MPESA_PASSKEY')
		# MyMpesaTillNumber = mpesa_config('MY_MPESA_TILL_NUMBER')
		business_short_code = mpesa_config('MPESA_SHORTCODE')
		timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
		password = base64.b64encode((business_short_code + passkey + timestamp).encode('ascii')).decode('utf-8')

		party_a = mpesa_config('MPESA_SHORTCODE')
		SecurityCredential = password
		QueueTimeOutURL = QueueTimeOutURL
		ResultsURL = ResultsURL
		# QueueTimeOutURL = "http://127.0.0.1:8000/queuetimeouturl"
		# transaction_type = 'CustomerBuyGoodsOnline'
		# ResultsURL = "http://127.0.0.1:8000/resultsurl"

		data = {
			'Initiator': Initiator,
			'SecurityCredential': SecurityCredential,
			'Command_ID': Command_ID,
			'PartyA': party_a,
			'IdentifierType': IdentifierType,
			'Remarks': Remarks,
			'QueueTimeOutURL': QueueTimeOutURL,
			'ResultsURL': ResultsURL

		}

		headers = {
			'Authorization': 'Bearer ' + mpesa_access_token( ),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def Transaction_status(self, initiator, OriginatorConversationID, Transaction_ID):
		if str(Transaction_ID).strip( ) == '':
			raise MpesaInvalidParameterException('Transaction description cannot be blank')
		if not isinstance(OriginatorConversationID, str):
			raise MpesaInvalidParameterException('OriginatorConversationID must be a Valid String')

		# phone_number = format_phone_number(phone_number)
		url = api_base_url( ) + 'mpesa/transactionstatus/v1/query'
		# url = 'https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query'
		business_short_code = mpesa_config('MPESA_SHORTCODE')
		initiator_username = initiator
		initiator_security_credential = encrypt_security_credential(mpesa_config('MPESA_INITIATOR_SECURITY_CREDENTIAL'))
		Command_ID = 'TransactionStatusQuery'
		Transaction_ID = Transaction_ID  # From The Views.py Users End Since It Flexible
		PartyA = business_short_code
		IdentifierType = 3
		QueueTimeOutURL = "http://127.0.0.1:8000/queuetimeouturl"
		Remarks = 'ok'
		ResultURL = "http://127.0.0.1:8000/result"
		occassion = 'ok'
		OriginatorConversationID = OriginatorConversationID
		data = {
			'Initiator': initiator_username,
			'Command_ID': Command_ID,
			'Transaction_ID ': Transaction_ID,
			'PartyA': PartyA,
			'IdentifierType ': IdentifierType,
			'occassion': occassion,
			'Remarks': Remarks,
			'QueueTimeOutURL': QueueTimeOutURL,
			'ResultURL': ResultURL,
			'SecurityCredential': initiator_security_credential,
			'OriginatorConversationID': OriginatorConversationID,
		}

		headers = {
			'Authorization': 'Bearer ' + mpesa_access_token( ),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def Business_payment(self, initiator, amount, Remarks, PartyB,):

		Initiator = initiator
		Command_ID = "BusinessPayment"
		amount = amount
		url = api_base_url() + 'mpesa/b2c/v3/paymentrequest'
		passkey = mpesa_config('MPESA_PASSKEY_B')
		# MyMpesaTillNumber = mpesa_config('MY_MPESA_TILL_NUMBER')
		# url = api_base_url() + 'mpesa/stkpush/v1/processrequest'
		business_short_code = mpesa_config('MPESA_SHORTCODE_B')

		# mpesa_environment = mpesa_config('MPESA_ENVIRONMENT')
		# if mpesa_environment == 'sandbox':

		# else:
		# 	business_short_code = mpesa_config('MPESA_EXPRESS_SHORTCODE_B')

		timestamp = datetime.now( ).strftime('%Y%m%d%H%M%S')
		password = base64.b64encode((business_short_code + passkey + timestamp).encode('ascii')).decode('utf-8')

		party_a = mpesa_config('MPESA_SHORTCODE_B')
		SecurityCredential = password
		QueueTimeOutURL = "http://127.0.0.1:8000/queuetimeouturl"
		# transaction_type = 'CustomerBuyGoodsOnline'
		ResultsURL = "http://127.0.0.1:8000/resultsurl"
		# party_b = '254708534184'
		party_b = PartyB
		Occassion = 'Mboa Academy Fee'
		OriginatorConversationID = 'f972-4d44-860a-95efa588279995078467'
		data = {
			'OriginatorConversationID': OriginatorConversationID,
			'Initiator': Initiator,
			'SecurityCredential': SecurityCredential,
			'Command_ID': Command_ID,
			'Amount': amount,
			'PartyA': party_a,
			'PartyB': party_b,
			'Remarks': Remarks,
			'QueueTimeOutURL': QueueTimeOutURL,
			'ResultsURL': ResultsURL,
			'Occassion': Occassion,

		}

		headers = {
			'Authorization': 'Bearer ' + B_mpesa_access_token( ),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))

	def Business_2_Business_Express_Checkout(self, receiverShortCode, primaryShortCode, partnerName, paymentRef, RequestRefID, amount):
		# B2B(UssdPush to Till) is a product for enabling merchants to initiate USSD Push to Till enabling their fellow merchants to pay from their owned till numbers to the vendor's paybill.
		primaryShortCode = primaryShortCode
		receiverShortCode = receiverShortCode
		amount = amount
		paymentRef = paymentRef
		CallbackURL = "http://127.0.0.1:8000/resultsurl"
		partnerName = partnerName
		RequestRefID = RequestRefID

		url = 'https://sandbox.safaricom.co.ke/v1/ussdpush/get-msisdn'
		# url = api_base_url() + 'mpesa/v1/ussdpush/get-msisdn'
		# url = api_base_url() + 'mpesa/stkpush/v1/processrequest'
		passkey = mpesa_config('MPESA_PASSKEY_B')
		business_short_code = mpesa_config('MPESA_SHORTCODE_B')
		timestamp = datetime.now( ).strftime('%Y%m%d%H%M%S')
		password = base64.b64encode((business_short_code + passkey + timestamp).encode('ascii')).decode('utf-8')
		SecurityCredential = password

		data = {
			'primaryShortCode': primaryShortCode,
			'receiverShortCode': receiverShortCode,
			'amount': amount,
			'paymentRef': paymentRef,
			'SecurityCredential': SecurityCredential,
			'CallbackURL': CallbackURL,
			'PartnerName': partnerName,
			'RequestRefID': RequestRefID,


		}

		headers = {
			'Authorization': 'Bearer ' +B_mpesa_access_token(),
			'Content-type': 'application/json'
		}

		try:
			r = requests.post(url, json=data, headers=headers)
			response = mpesa_response(r)
			return response
		except requests.exceptions.ConnectionError:
			raise MpesaConnectionError('Connection failed')
		except Exception as ex:
			raise MpesaConnectionError(str(ex))