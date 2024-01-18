from django.contrib import admin

from .models import (
    ContactInfo,
    Banner,
    About,
    ServiceItem,
    Service,
    Whychoose,
    ProjectItem,
    Projects,
    Teammember,
    TestItem,
    Testimonial,
    Newslatter,
    Contact,
)

admin.site.register([
    ContactInfo,
    Banner,
    About,
    ServiceItem,
    Service,
    Whychoose,
    ProjectItem,
    Projects,
    Teammember,
    TestItem,
    Testimonial,
    Newslatter,
    Contact,
])
