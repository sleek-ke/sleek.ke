from django.shortcuts import render
import requests


# from django.http import HttpResponse


def crypto(request):
	url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=200&page=1' \
          '&sparkline=false'
	data = requests.get(url).json()
	context = {'data': data}
	# return HttpResponse(data)
	return render(request, 'positions/main.html', context)
