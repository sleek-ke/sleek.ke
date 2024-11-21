from django.urls import include, path
from .views import P2P, P2P_send, P2P_receive, P2P_Bots, P2P_dev, P2P_DetailView, plug_search

urlpatterns = [

     
     path('', P2P, name='Duka'),
     path('send', P2P_send, name='send'),
     path('receive', P2P_receive, name='send'),
     path('Bots', P2P_Bots, name='Bots'),
     path('dev', P2P_dev, name='dev'),
     path('plugs', plug_search, name='P2P_plug'),
     path('Bots/<slug>/', P2P_DetailView.as_view, name='Detail_P2P'),
]