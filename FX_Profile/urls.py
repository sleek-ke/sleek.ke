from . import views
from django.urls import path
from .views import AcademyView, BooksView,SocialLinksView


urlpatterns = [
    path('setting', views.SettingView, name='dashboard'),
    path('Academy', AcademyView.as_view(), name='Academics'),
    path('Books', BooksView.as_view(), name='Books'),
    path('accounts/SocialMedia', SocialLinksView.as_view(), name='SocialLinks'),
    path('+mboa', views.MboaEX, name='MboaEX'),
    path('page', views.page, name='page'),
    path('merchant', views.merchant, name='merchant'),
    path('academy', views.academy, name='academy'),
    path('Users', views.Member, name='User'),
    path('wallet/ID', views.ID, name='ID'),
    path('wallet/banks', views.banks, name='banks'),
    path('wallet', views.wallet, name='wallet'),
    path('', views.hero, name='wallet'),
    path('Swap', views.Swap, name='Swap'),
    path('pro', views.BrokerView, name='pro'),
    path('Deposit', views.Deposit, name='Deposit'),
    path('setting', views.setting, name='setting'),
    path('stk', views.stk_Push, name='stk'),
    path('wallet/stk', views.stk_Push, name='stk'),
    path('LipaNaMpesa', views.LipaNaMpesa, name='LipaNaMpesa'),
]
