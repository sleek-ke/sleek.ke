from django.urls import path
from mpesa import views
from .views import DepositMoneyView, WithdrawMoneyView, LoanView, TransactionRepostView, eshopCart, MboaCoins, Invest


app_name = 'transactions'


urlpatterns = [
    path("stk", views.stk, name="stk"),
    path("deposit/", DepositMoneyView.as_view(), name="deposit_money"),
    path("report/", TransactionRepostView.as_view(), name="transaction_report"),
    path("withdraw/", WithdrawMoneyView.as_view(), name="withdraw_money"),
    path("mboapay/", eshopCart.as_view(), name="mboapay"),
    path("Invest", Invest, name="Invest"),
    path("mboaCoins/", MboaCoins.as_view(), name="eshopcart"),
    path("Loan", LoanView.as_view(), name="Loan"),
]
