from django import forms
from .models import Academy


class AcademyForm(forms.ModelForm):

    class Meta:
        model = Academy
        fields = [
            'Nerd',
            'cortex_Price',
            'cortex_Duration',
            'cortex_image',
            'cortex_Description',
            'cortex_Name',
            'course',
            'posted_at',
            'Programming_Language',
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


class PaymentForm(forms.Form):
    stripeToken = forms.CharField(required=False)
    save = forms.BooleanField(required=False)
    use_default = forms.BooleanField(required=False)
    phone_number = forms.CharField(label='Phone Number')
    amount = forms.IntegerField(label='Payment Amount')
