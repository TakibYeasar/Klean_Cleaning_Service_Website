from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('banners/', BannerView.as_view()),
    path('contactinfo/', ContactInfoView.as_view()),
    path('about/', AboutView.as_view()),
    path('serviceitem/', ServiceItemView.as_view()),
    path('allservices/', ServiceView.as_view()),
    path('whychoose/', WhychooseView.as_view()),
    path('projectcat/', ProjectcategoryView.as_view()),
    path('projectitem/', ProjectItemView.as_view()),
    path('allprojects/', ProjectsView.as_view()),
    path('teammember/', TeamitemView.as_view()),
    path('team/', TeamView.as_view()),
    path('testitem/', TestItemView.as_view()),
    path('testimonial/', TestimonialView.as_view()),
    path('blogscat/', BlogscategoryView.as_view()),
    path('blogstag/', BlogstagView.as_view()),
    path('blogsitem/', BlogsitemView.as_view()),
    path('blogs/', BlogsView.as_view()),
    path('blogreview/', BlogReviewView.as_view()),
    path('replayblogreview/', ReplayBlogReviewView.as_view()),
]