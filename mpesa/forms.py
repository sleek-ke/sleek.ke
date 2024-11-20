from django import forms


class PaymentForm(forms.Form):
    phone_number = forms.CharField(label='Phone Number', help_text="Phone Number where Mpesa Notification is sent.")
    amount = forms.CharField(label='Payment Amount', help_text="Amount of  money in KES .")
    account_reference = forms.CharField(label='account_reference', help_text="Mboa-ID. Account No.")

  
class QueryForm(forms.Form):
    account_reference = forms.CharField()
    transaction_desc = forms.CharField()
    occassion = forms.CharField()
    CheckoutRequestID = forms.CharField()
    timestamp = forms.NumberInput()
    MerchantRequestID = forms.CharField()
    ResponseCode = forms.CharField()
    ResponseDescription = forms.CharField()
    CustomerMessage = forms.CharField()