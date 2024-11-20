from dateutil.relativedelta import relativedelta

from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.urls import reverse_lazy
from django.utils import timezone
from django.views.generic import CreateView, ListView

from transactions.constants import DEPOSIT, WITHDRAWAL, MBOAPAY, LOAN, MBOACOINS
from transactions.forms import (
    DepositForm,
    TransactionDateRangeForm,
    WithdrawForm,
    eshopCart_Form,
    LoanForm,
    MboaCoins_Form,
)
from transactions.models import Transaction


class TransactionRepostView(LoginRequiredMixin, ListView):
    template_name = 'transactions/transaction_report.html'
    model = Transaction
    form_data = {}

    def get(self, request, *args, **kwargs):
        form = TransactionDateRangeForm(request.GET or None)
        if form.is_valid():
            self.form_data = form.cleaned_data

        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        queryset = super().get_queryset().filter(
            account=self.request.user.account
        )

        daterange = self.form_data.get("daterange")

        if daterange:
            queryset = queryset.filter(timestamp__date__range=daterange)

        return queryset.distinct()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'account': self.request.user.account,
            'form': TransactionDateRangeForm(self.request.GET or None)
        })

        return context


class TransactionCreateMixin(LoginRequiredMixin, CreateView):
    template_name = 'transactions/transaction_form.html'
    model = Transaction
    title = ''
    success_url = reverse_lazy('transactions:transaction_report')

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs.update({
            'account': self.request.user.account
        })
        return kwargs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'title': self.title
        })

        return context


class DepositMoneyView(TransactionCreateMixin):
    form_class = DepositForm
    title = 'Deposit.Top-up your account🤑'

    def get_initial(self):
        initial = {'transaction_type': DEPOSIT}
        return initial

    def form_valid(self, form):
        amount = form.cleaned_data.get('amount')
        account = self.request.user.account
        #pesa = views.stk(amount)

        if not account.initial_deposit_date:
            now = timezone.now()
            next_interest_month = int(
                12 / account.account_type.interest_calculation_per_year
            )
            account.initial_deposit_date = now
            account.interest_start_date = (
                now + relativedelta(
                    months=+next_interest_month
                )
            )

        account.balance += amount
        account.save(
            update_fields=[
                'initial_deposit_date',
                'balance',
                'interest_start_date'
            ]
        )

        messages.success(
            self.request,
            f' Wazi Bro!  Ksh.{amount} was deposited to your account successfully'
        )

        return super().form_valid(form)


class WithdrawMoneyView(TransactionCreateMixin):
    form_class = WithdrawForm
    title = 'Withdraw funds'

    def get_initial(self):
        initial = {'transaction_type': WITHDRAWAL}
        return initial

    def form_valid(self, form):
        amount = form.cleaned_data.get('amount')

        self.request.user.account.balance -= form.cleaned_data.get('amount')
        self.request.user.account.save(update_fields=['balance'])

        messages.success(
            self.request,
            f' Wazi Bro!  Successfully withdrawn  Ksh.{amount} from your account'
        )

        return super().form_valid(form)


class eshopCart(TransactionCreateMixin):
    template_name = 'transactions/Mboapay/Mboapay.html'
    form_class = eshopCart_Form
    title = 'Mboapay - Online Purchase of MboaCoins'

    def get_initial(self):
        initial = {'transaction_type': MBOAPAY}
        return initial

    def form_valid(self, form):
        amount = form.cleaned_data.get('amount')

        self.request.user.account.balance -= form.cleaned_data.get('amount')
        self.request.user.account.save(update_fields=['balance'])

        messages.success(
            self.request,
            f'Wazi Bro! Successfully Used Mboapay. Hi , Ksh.{amount}  Withdrawn from your account for Payments'
        )

        return super().form_valid(form)
    
    
class MboaCoins(TransactionCreateMixin):
    form_class = MboaCoins_Form
    title = 'Buy Mboa Coins Now'

    def get_initial(self):
        initial = {'transaction_type': MBOACOINS}
        return initial

    def form_valid(self, form):
       
        amount = form.cleaned_data.get('amount')
        account = self.request.user.account
        amountx = amount/500

        if not account.initial_deposit_date:
            now = timezone.now()
            next_interest_month = int(
                12 / account.account_type.interest_calculation_per_year
            )
            account.initial_deposit_date = now
            account.interest_start_date = (
                now + relativedelta(
                    months=+next_interest_month
                )
            )

        account.balance -= amount
        account.save(
            update_fields=[
                'initial_deposit_date',
                'balance',
                'interest_start_date'
            ]
        )

        messages.success(
            self.request,
            f'  Nice Move,  {amountx} MboaCoins   Deposited to your Mboa-ID account successfully'
        )

        return super().form_valid(form)


class LoanView(TransactionCreateMixin):
    form_class = LoanForm
    title = 'Enter loan Amount You Need'
    
    def get_initial(self):
        initial = {'transaction_type': LOAN}
        return initial
    
    def form_valid(self, form):
        amount = form.cleaned_data.get('amount')
        account = self.request.user.account
       
        Fee = int(amount) * 1/20
        
        if not account.initial_deposit_date:
            now = timezone.now()
            next_interest_month = int(
                12 / account.account_type.interest_calculation_per_year
            )
            account.initial_deposit_date = now
            account.interest_start_date = (
                    now + relativedelta(months=+next_interest_month)
            )
        
        account.balance += amount
        account.save(
            update_fields=[
                'initial_deposit_date',
                'balance',
                'interest_start_date'
            ]
        )
        
        messages.success(
            self.request,
            f'  Congratulations! Loan Approved '
            f'Ksh.{amount} Deposited to your Mboa-ID account successfully'
            f'You will repay with a fee of {Fee}.'
            f'Kindly Payback Before : {account.interest_start_date} and avoid Penalties..'
        )
        
        return super().form_valid(form)


def Invest(request):
    # model = Item
    return render(request, 'mpesa/invest.html')