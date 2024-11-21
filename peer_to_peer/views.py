from django.shortcuts import render
#import segno
#from segno import helpers

import accounts.forms
from .models import SendMoney
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from accounts.models import UserAddress
from django.views.generic import ListView, DetailView, View
from itertools import chain
# Create your views here.


class P2P_DetailView(DetailView):
    model = UserAddress
    template_name = "Bots.html"

def display_profiles(self, request):
    profile = self.SendMoney.request.user
    return render(request, 'peer_to_peer/dashboard.html', {'profile': profile})

def P2P_receive(request):
    qr = helpers.make_wifi(ssid='Mboa Technology', password='12834048%Mboa', security='WPA2 PSK')
    qr.save('Mboa-wifi.png', dark='green', light='white')
    
    return render(request, 'peer_to_peer/receive.html', {'qr': qr})


def P2P_send(request):
    return render(request, 'peer_to_peer/send.html')


def P2P_Bots(request):
    return render(request, 'fx/Bots.html')

def P2P(request):
    return render(request, 'peer_to_peer/dashboard.html')

@login_required(login_url='/accounts/login')
def P2P_dev(request):
	user_profile = UserAddress.objects.get(user=request.user)
	slugy = user_profile.slug
	if request.user.is_anonymous:
		return redirect('user_login.html')
	with open(f'MboaEx_keys/{slugy}.txt', 'r') as f:
		file_content = f.read()
		return render(request, 'core/slug.html', {'file_content': file_content})


def plug_search(request):
	user_profile = UserAddress.objects.get(user=request.user.pk)
	
	if request.method == 'POST':
		username = request.POST['username']
		username_object = UserAddress.objects.filter(slug__icontains=username)
		
		username_profile = []
		username_profile_list = []
		
		for users in username_object:
			username_profile.append(users.id)
		
		for ids in username_profile:
			profile_lists = UserAddress.objects.filter(user_id=ids)
			username_profile_list.append(profile_lists)
		
		username_profile_list = list(chain(*username_profile_list))
	return render(request, 'peer_to_peer/dashboard.html',
	              {'user_profile': user_profile, 'username_profile_list': username_profile_list})