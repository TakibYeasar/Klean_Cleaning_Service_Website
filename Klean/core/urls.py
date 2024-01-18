from django.urls import path
from .views import *

urlpatterns = [
    path('contactinfo/', ContactinfoView.as_view(), name='contactinfo'),
    path('banner/', BannerView.as_view(), name='banner'),
    path('about/', AboutView.as_view(), name='about'),
    path('service/', ServiceView.as_view(), name='service'),
    path('whychoose/', WhychooseView.as_view(), name='whychoose'),
    path('projects/', ProjectsView.as_view(), name='projects'),
    path('getallprojects/', GetprojectView.as_view(), name='getallproject'),
    path('projects/<int:id>/', GetprojectView.as_view(), name='getproject'),
    path('teammember/', TeammemberView.as_view(), name='teammember'),
    path('testimonial/', TestimonialView.as_view(), name='testimonial'),
]
