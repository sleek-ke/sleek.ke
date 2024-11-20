from django.urls import path
from . import views
from .views import MboaNFTs


urlpatterns = [
	path('', views.PostsView.index, name='index'),
	path('settings', views.settings, name='settings'),
	path('upload', views.upload, name='upload'),
	path('post', views.Plug_Products.posts, name='posts'),
	path('plug/follow/', views.follow, name='follow'),
	path('Ma-Plug/', views.Ma_Plug, name='Ma_Plug'),
	path('wasee/', views.Plug_Products.wasee, name='wasee'),
	path('Mali', views.Plug_Products.as_view(), name='Mali'),
	path('posts', views.PostsView.as_view(), name='pos'),
	path('search', views.search, name='search'),
	path('profile/<str:pk>/<user>', views.Plug_Products.as_view(), name='plug_profile'),
	path('like-post', views.like_post, name='like_post'),
	path('MboaNFTs', MboaNFTs, name='MboaNFTs'),

]