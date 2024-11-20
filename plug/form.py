from accounts.constants import MODE_PAY
from accounts.forms import *


class Pay_Mode():
    account_type = forms.ModelChoiceField(
        queryset=BankAccountType.objects.all()
    )
    mode_pay = forms.ChoiceField(choices=MODE_PAY)
             