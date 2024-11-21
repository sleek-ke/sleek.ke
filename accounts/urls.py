from django.urls import path
from .views import UserRegistrationView, LogoutView, UserLoginView, Sure_kuleft,ProfileDetailView, CardyView, CardyCreateMixin
from mpesa.views import stk
from sleek_profile import views


app_name = 'accounts'

urlpatterns = [
    path("login/", UserLoginView.as_view(), name="user_login"),
    path("out", LogoutView.as_view(), name="optout"),
    path("logout/", Sure_kuleft, name="user_logout"),
    path("register/", UserRegistrationView.as_view(), name="user_registration"),
    path("cards/", CardyView.as_view(), name="cards"),
    path('mpesa/stk', stk, name='stk_signup'),
    path('stk', stk, name='deposit'),
    path('cardy', CardyCreateMixin.as_view(), name='cardy'),
    path("settings", views.ex_setting, name="ex_setting"),
    path('profile/<str:pk>/<user>', ProfileDetailView.as_view(), name='ProfileDetail'),
   
]
