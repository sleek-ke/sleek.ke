from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from .models import Post, LikePost, FollowersCount
from itertools import chain
import random
from accounts.models import UserAddress
from django.shortcuts import render
from openSoko.models import Item
from django.views.generic import ListView
from.models import Profile


class Plug_Products(ListView):
    model = Item
    paginate_by = 12
    template_name = "plug/profile.html"
    
    def wasee(request):
        user_profile = UserAddress.objects.all()
        username_object = UserAddress.objects.all()
    
        username_profile = []
        username_profile_list = []
    
        for users in username_object:
            username_profile.append(users.user)
    
        for users in username_profile:
            profile_lists = UserAddress.objects.filter(user_id=users)
            username_profile_list.append(profile_lists)
    
        username_profile_list = list(chain(*username_profile_list))
    
        return render(request, 'plug/wasee.html',
                      {'user_profile': user_profile, 'username_profile_list': username_profile_list})
   
    def posts(request):
        user_profile = UserAddress.objects.get(user=request.user)
        user_following_list = []
        feed = []
    
        user_following = FollowersCount.objects.filter(follower=request.user)
    
        for users in user_following:
            user_following_list.append(users.user)
    
        for users in user_following_list:
            feed_lists = Post.objects.filter(user=users)
            feed.append(feed_lists)
    
        feed_list = list(chain(*feed))
    
        # user suggestion starts
        all_users = UserAddress.objects.all()
        user_following_all = []
    
        for user in user_following:
            user_list = UserAddress.objects.get(username=user.user)
            user_following_all.append(user_list)
    
        new_suggestions_list = [x for x in list(all_users) if (x not in list(user_following_all))]
        current_user = UserAddress.objects.filter(slug=request.user.username)
        final_suggestions_list = [x for x in list(new_suggestions_list) if (x not in list(current_user))]
        random.shuffle(final_suggestions_list)
    
        username_profile = []
        username_profile_list = []
    
        for users in final_suggestions_list:
            username_profile.append(users.id)
    
        for ids in username_profile:
            profile_lists = UserAddress.objects.filter(user=ids)
            username_profile_list.append(profile_lists)
    
        suggestions_username_profile_list = list(chain(*username_profile_list))
    
        return render(request, 'fx/setting.html', {'user_profile': user_profile,
                                                   'suggestions_username_profile_list': suggestions_username_profile_list,
                                                   'posts': feed_list, })

class PostsView(ListView):
    model = Post
    template_name = "plug/posts.html"

    @login_required
    def index(request):
        user_profile = UserAddress.objects.get(user=request.user)
        user_following_list = []
        feed = []
    
        user_following = FollowersCount.objects.filter(follower=request.user)
    
        for users in user_following:
            user_following_list.append(users.user)
    
        for users in user_following_list:
            feed_lists = Post.objects.filter(user=users)
            feed.append(feed_lists)
    
        feed_list = list(chain(*feed))
    
        # user suggestion starts
        all_users = UserAddress.objects.all()
        user_following_all = []
    
        for user in user_following:
            user_list = UserAddress.objects.get(username=user.user)
            user_following_all.append(user_list)
    
        new_suggestions_list = [x for x in list(all_users) if (x not in list(user_following_all))]
        current_user = UserAddress.objects.filter(slug=request.user.username)
        final_suggestions_list = [x for x in list(new_suggestions_list) if (x not in list(current_user))]
        random.shuffle(final_suggestions_list)
    
        username_profile = []
        username_profile_list = []
    
        for users in final_suggestions_list:
            username_profile.append(users.id)
    
        for ids in username_profile:
            profile_lists = UserAddress.objects.filter(user=ids)
            username_profile_list.append(profile_lists)
    
        suggestions_username_profile_list = list(chain(*username_profile_list))
        return render(request, 'plug/posts.html', {'user_profile': user_profile, 'posts': feed_list,
                                                   'suggestions_username_profile_list': suggestions_username_profile_list[
                                                                                        :4]})

@login_required
def upload(request):

    if request.method == 'POST':
        user = UserAddress.objects.get(user=request.user)
        image = request.FILES.get('image_upload')
        caption = request.POST['caption']

        new_post = Post.objects.create(user=user, image=image, caption=caption)
        new_post.save()
        
        return redirect('/plug/posts', {'user_profile': user})
        # return render(request, 'plug/posts.html')
    else:
        # return redirect('/plug/profile')
        return render(request, 'plug/upload.html')
    

@login_required
def search(request):
    user_profile = UserAddress.objects.get(user=request.user.pk)

    if request.method == 'POST':
        username = request.POST['username']
        username_object = UserAddress.objects.filter(slug__icontains=username)

        username_profile = []
        username_profile_list = []

        for users in username_object:
            username_profile.append(users.user)

        for users in username_profile:
            profile_lists = UserAddress.objects.filter(user_id=users)
            username_profile_list.append(profile_lists)
        
        username_profile_list = list(chain(*username_profile_list))
    return render(request, 'plug/search.html', {'user_profile': user_profile, 'username_profile_list': username_profile_list})

@login_required
def like_post(request):
    username = UserAddress.objects.get(user=request.user)
    # post_id = request.GET.get('post_Id')
    post_id = request.POST['post_Id']
    post = Post.objects.get(id=post_id)

    like_filter = LikePost.objects.filter(post_id=post_id, username=username).first()

    if like_filter == None:
        new_like = LikePost.objects.create(post_id=post_id, username=username)
        new_like.save()
        post.no_of_likes = post.no_of_likes+1
        post.save()
        return redirect('/plug')
    else:
        like_filter.delete()
        post.no_of_likes = post.no_of_likes-1
        post.save()
        return redirect('/plug')


@login_required
def follow(request):
    if request.method == 'POST':
        follower = request.POST[ 'follower' ]
        user = request.POST[ 'user' ]

        if FollowersCount.objects.filter(follower=follower, user=user).first( ):
            delete_follower = FollowersCount.objects.get(follower=follower, user=user)
            delete_follower.delete( )
            return redirect('/profile/' + user)
        else:
            new_follower = FollowersCount.objects.create(follower=follower, user=user)
            new_follower.save( )
            return redirect('/profile/' + user)
    else:
        return redirect('/')


@login_required
def settings(request):
    # user_profile = Profile.objects.get(user=request.user)
    user_profile = UserAddress.objects.get(user=request.user)

    if request.method == 'POST':

        if request.FILES.get('image') == None:
            image = user_profile.profileimg
            bio = request.POST[ 'bio' ]
            location = request.POST[ 'location' ]

            user_profile.profileimg = image
            user_profile.bio = bio
            user_profile.location = location
            user_profile.save( )
        if request.FILES.get('image') != None:
            image = request.FILES.get('image')
            bio = request.POST[ 'bio' ]
            location = request.POST[ 'location' ]

            user_profile.profileimg = image
            user_profile.bio = bio
            user_profile.location = location
            user_profile.save( )

        return redirect('settings')
    return render(request, 'fx/ex_setting.html', { 'user_profile': user_profile })


@login_required
def Ma_Plug(request):
    user_profile = UserAddress.objects.get(user=request.user.pk)
    username_object = UserAddress.objects.filter(slug__icontains=user_profile)

    username_profile = [ ]
    username_profile_list = [ ]

    for users in username_object:
        username_profile.append(users.user)

    for users in username_profile:
        profile_lists = UserAddress.objects.filter(user_id=users)
        username_profile_list.append(profile_lists)

    username_profile_list = list(chain(*username_profile_list))

    return render(request, 'plug/Ma-plug.html',
                  { 'user_profile': user_profile, 'username_profile_list': username_profile_list })


def MboaNFTs(request):
    return render(request, 'pages/dashboard.html')


# @login_required
# def profile(request):
#     global context
#     user_profile = UserAddress.objects.get(user=request.user.pk)
#     user_posts = Post.objects.filter(username=request.user.pk)
#     user_post_length = len(user_posts)
#     follower = UserAddress.objects.get(user=request.user)
#
#     if FollowersCount.objects.filter(follower=follower, user=request.user).first( ):
#         button_text = 'Unfollow'
#     else:
#         button_text = 'Follow'
#
#     user_followers = len(FollowersCount.objects.filter(user=request.user.pk))
#     user_following = len(FollowersCount.objects.filter(follower=request.user.pk))
#     context = {
#         'user_profile': user_profile,
#         'user_posts': user_posts,
#         'user_post_length': user_post_length,
#         'button_text': button_text,
#         'user_followers': user_followers,
#         'user_following': user_following,
#     }
#     return render(request, 'plug/profile.html', context)


@login_required
def profile(request, pk):
    user_object = UserAddress.objects.get(username=pk)
    user_profile = Profile.objects.get(user=user_object)
    user_posts = Post.objects.filter(user=pk)
    user_post_length = len(user_posts)

    follower = Profile.objects.get(user=request.user)
    user = pk

    if FollowersCount.objects.filter(follower=follower, user=user).first():
        button_text = 'Unfollow'
    else:
        button_text = 'Follow'

    user_followers = len(FollowersCount.objects.filter(user=pk))
    user_following = len(FollowersCount.objects.filter(follower=pk))

    context = {
        'user_object': user_object,
        'user_profile': user_profile,
        'user_posts': user_posts,
        'user_post_length': user_post_length,
        'button_text': button_text,
        'user_followers': user_followers,
        'user_following': user_following,
    }
    return render(request, 'profile.html', context)


