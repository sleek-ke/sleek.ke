from django import forms
from django.conf import settings
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction

from .models import User, BankAccountType, UserBankAccount, UserAddress
from .constants import GENDER_CHOICES
from .models import Official_Cardy


class UserAddressForm(forms.ModelForm):

    class Meta:
        model = UserAddress
        fields = [
            'street_address',
            'city',
            'profileimg',
            'apartment_address',
            'postal_code',
            'country',
            'National_id',
            'Kra_Pin',
            'location',
            'National_Passport_No',
            'Nick_Name'


        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.fields:
            self.fields[field].widget.attrs.update({
                'class': (
                    'bty'),
                'style': (
                    'width:98%;')
            })


class UserRegistrationForm(UserCreationForm):
    account_type = forms.ModelChoiceField(
        queryset=BankAccountType.objects.all()
    )
    gender = forms.ChoiceField(choices=GENDER_CHOICES)
    birth_date = forms.DateField()

    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'password1',
            'password2',
        ]
        extra_kwargs = {"password1": {'write_only': True}}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.fields:
            self.fields[field].widget.attrs.update({
                'class': (
                    'bty'),
                'style': (
                    'width:98%;')
            })

    @transaction.atomic
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
            account_type = self.cleaned_data.get('account_type')
            gender = self.cleaned_data.get('gender')
            birth_date = self.cleaned_data.get('birth_date')

            UserBankAccount.objects.create(
                user=user,
                gender=gender,
                birth_date=birth_date,
                account_type=account_type,
                account_no=(
                    user.id +
                    int(settings.ACCOUNT_NUMBER_START_FROM)
                )
            )
        return user


class SocialAccountsForm(forms.ModelForm):

    objects = None

    class Meta:
        model = Official_Cardy
        fields = [
            'account',
            'cardy_type',
            'cardy_number',
            'cardy_label',
            'cardy_slug',
            'cardy_description',
            'cardy_front_image',
            'cardy_Back_image'
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.fields:
            self.fields[field].widget.attrs.update({
                'class': (
                    'bty'),
                'style': (
                    'width:98%;')
            })
