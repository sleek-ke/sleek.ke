from django.db import models
import uuid
from datetime import datetime
from accounts.models import UserAddress
from django.shortcuts import reverse


class Profile(models.Model):
    user = models.ForeignKey(UserAddress, on_delete=models.CASCADE)
    id_user = models.IntegerField()
    about = models.TextField(blank=True)

    def __str__(self):
        return self.user


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.ForeignKey(UserAddress, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='post_images', null=True)
    caption = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    no_of_likes = models.IntegerField(default=0)

    def __str__(self):
        return self.user
    def get_absolute_url(self):
        return reverse("plug:profile", kwargs={
            'slug': self.id
        })


class LikePost(models.Model):
    post_id = models.SlugField(max_length=500)
    username = models.CharField(max_length=100)

    def __str__(self):
        return self.username


class FollowersCount(models.Model):
    follower = models.CharField(max_length=100)
    user = models.CharField(max_length=100)

    def __str__(self):
        return self.user
   
    
#  6381906   6570681
# 4136689     8566210
    