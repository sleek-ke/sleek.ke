from __future__ import unicode_literals
from .models import Post, LikePost, FollowersCount
from django.contrib import admin
from django.utils.html import format_html


admin.site.register(Post)
admin.site.register(LikePost)
admin.site.register(FollowersCount)

# - *- coding: utf-8 -*-


# Register your models here.


# Register your models here.
#
# class plugAdmin(admin.ModelAdmin):
# 	def thumbnail(self, object):
# 		return format_html('<img src="{}" width="40" style="border-radius: 50px;" />'.format(object.car_photo.url))
#
# 	thumbnail.short_description = 'Car Image'
# 	list_display = (
# 	'id', 'thumbnail', 'plug_name', 'city', 'color', 'model', 'year', 'body_style', 'fuel_type', 'is_featured')
# 	list_display_links = ('id', 'thumbnail', 'plug_name')
# 	list_editable = ('is_featured',)
# 	search_fields = ('id', 'plug_name', 'city', 'model', 'body_style', 'fuel_type')
# 	list_filter = ('city', 'model', 'body_style', 'fuel_type')