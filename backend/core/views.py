from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.


class BannerView(APIView):
    def get(self, request):
        banner_obj = Banner.objects.all()
        banner_serializers = BannerSerializer(banner_obj, many=True, context={'request':request}).data
        return Response(banner_serializers)
    
    
class ContactInfoView(APIView):
    def get(self, request):
        contactinfo_obj = ContactInfo.objects.all()
        contactinfo_serializers = ContactInfoSerializer(contactinfo_obj, many=True, context={'request':request}).data
        return Response(contactinfo_serializers)
    
    
class AboutView(APIView):
    def get(self, request):
        about_obj = About.objects.all()
        about_serializers = AboutSerializer(about_obj, many=True, context={'request':request}).data
        return Response(about_serializers)


class ServiceItemView(APIView):
    def get(self, request, pk):
        item_obj = ServiceItem.objects.filter(id=pk)
        item_serializer = ServiceItemSerializer(item_obj, many=True, context={'request':request}).data
        return Response(item_serializer)



class ServiceView(APIView):
    def get(self, request):
        service_obj = Service.objects.all()
        service_serializers = ServiceSerializer(service_obj, many=True, context={'request':request}).data
        return Response(service_serializers)


class WhychooseView(APIView):
    def get(self, request):
        whychoose_obj = Whychoose.objects.all()
        whychoose_serializers = WhychooseSerializer(whychoose_obj, many=True, context={'request':request}).data
        return Response(whychoose_serializers)


class ProjectcategoryView(APIView):
    def get(self, request):
        category_obj = Projectcategory.objects.all()
        category_serializers = ProjectcategorySerializer(category_obj, many=True, context={'request':request}).data
        return Response(category_serializers)


class ProjectItemView(APIView):
    def get(self, request, pk):
        item_obj = ProjectItem.objects.filter(id=pk)
        item_serializer = ProjectItemSerializer(item_obj, many=True, context={'request':request}).data
        return Response(item_serializer)


class ProjectsView(APIView):
    def get(self, request):
        projects_obj = Projects.objects.all()
        projects_serializers = ProjectsSerializer(projects_obj, many=True, context={'request':request}).data
        return Response(projects_serializers)



class TeamitemView(APIView):
    def get(self, request, pk):
        item_obj = Team.objects.filter(id=pk)
        item_serializer = TeamSerializer(item_obj, many=True, context={'request':request}).data
        return Response(item_serializer)


class TeamView(APIView):
    def get(self, request):
        team_obj = Team.objects.all()
        team_serializers = TeamSerializer(team_obj, many=True, context={'request':request}).data
        return Response(team_serializers)


class TestItemView(APIView):
    def get(self, request, pk):
        item_obj = TestItem.objects.filter(id=pk)
        item_serializer = TestItemSerializer(item_obj, many=True, context={'request':request}).data
        return Response(item_serializer)


class TestimonialView(APIView):
    def get(self, request):
        test_obj = Testimonial.objects.all()
        test_serializers = TestimonialSerializer(test_obj, many=True, context={'request':request}).data
        return Response(test_serializers)


class BlogscategoryView(APIView):
    def get(self, request):
        category_obj = Blogscategory.objects.all()
        category_serializers = BlogscategorySerializer(category_obj, many=True, context={'request':request}).data
        return Response(category_serializers)



class BlogstagView(APIView):
    def get(self, request):
        tag_obj = Blogstag.objects.all()
        tag_serializers = BlogstagSerializer(tag_obj, many=True, context={'request':request}).data
        return Response(tag_serializers)



class BlogsitemView(APIView):
    def get(self, request, pk):
        item_obj = Blogsitem.objects.filter(id=pk)
        item_serializer = BlogsitemSerializer(item_obj, many=True, context={'request':request}).data
        return Response(item_serializer)


class BlogsView(APIView):
    def get(self, request):
        blog_obj = Blogsitem.objects.all()
        blog_serializers = BlogsitemSerializer(blog_obj, many=True, context={'request':request}).data
        return Response(blog_serializers)



class BlogReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        review_serializer = BlogReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            blog = Blogsitem.objects.filter(pk=id).first()
            if blog:
                review_serializer.save(customer=request.customer, blog=blog)
                return Response(review_serializer.data , status=status.HTTP_200_OK)
            else:
                return Response({'error': "No product found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(data=review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReplayBlogReviewView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        review_serializer = ReplayBlogReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            review = BlogReview.objects.filter(pk=id).first()
            if review:
                review_serializer.save(customer=request.customer, review=review)
                return Response(review_serializer.data , status=status.HTTP_200_OK)
            else:
                return Response({'error': "No product found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(data=review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)





