from django.urls import path
from .views import *

urlpatterns = [
    path('categories/', GetArticleCategoriesView.as_view(), name='get_categories'),
    path('articles/', GetArticleView.as_view(), name='get_articles'),
    path('articles/<int:article_id>/',
         GetArticleView.as_view(), name='get_article'),
    path('articles/category/<int:category_id>/',
         ArticleByCategory.as_view(), name='articles_by_category'),

    path('articles/<int:article_id>/comments/',
         CreateComment.as_view(), name='create_comment'),
    path('articles/<int:article_id>/comments/',
         GetComments.as_view(), name='get_comments'),
    path('articles/comments/<int:comment_id>/',
         UpdateComment.as_view(), name='update_comment'),
    path('articles/comments/<int:comment_id>/delete/',
         DeleteComment.as_view(), name='delete_comment'),

    path('articles/comments/<int:article_id>/<int:comment_id>/reply/',
         CreateReplyComment.as_view(), name='create_reply_comment'),
    path('articles/comments/<int:article_id>/<int:comment_id>/replies/',
         GetReplyComments.as_view(), name='get_reply_comments'),
    path('articles/comments/<int:article_id>/<int:comment_id>/reply/',
         UpdateReplyComment.as_view(), name='update_reply_comment'),
    path('articles/comments/<int:article_id>/<int:comment_id>/reply/delete/',
         DeleteReplyComment.as_view(), name='delete_reply_comment'),
]
