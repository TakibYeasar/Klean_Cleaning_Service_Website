from django.contrib import admin

from .models import (
    Articlescategory,
    Articlestag,
    ArticleColumn,
    Article,
    ArticleComment,
)

admin.site.register([
    Articlescategory,
    Articlestag,
    ArticleColumn,
    Article,
    ArticleComment,
])
