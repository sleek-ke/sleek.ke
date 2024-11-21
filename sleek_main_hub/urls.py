from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	# For login to the Administrator Portal Only For SuperUsers
	path('admin/', admin.site.urls),
	
	
	# Can be accessed without Registration or login to the system. Basic lightweight function that require no Identity
	path('', include('sleek_profile.urls'), name="dashboard"),
	path('plug/', include('plug.urls'), name="plug"),
	path('', include('openSoko.urls', namespace="core"), name="core"),
	path('users/', include('plug.urls'), name="plug"),

	path("__reload__/", include("django_browser_reload.urls")),
	
	
	path('accounts/', include('accounts.urls'), name='accounts'),
	path('Notification/', include('conversation.urls'), name='banja'),
	path('mpesa/', include('mpesa.urls'), name='mpesa'),
	path('transactions/', include('transactions.urls'), name='transactions'),
	path('peer_to_peer/', include('peer_to_peer.urls'), name="peer_to_peer"),
	path('positions/', include('positions.urls'), name="positions"),
	
	
]
urlpatterns = urlpatterns+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = urlpatterns+static(settings.MBOA_ID_URL, document_root=settings.MBOA_ID_ROOT)
