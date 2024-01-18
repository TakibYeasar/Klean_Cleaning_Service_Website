from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.


class ContactinfoView(APIView):
    def get(self, request):
        try:
            info_obj = ContactInfo.objects.all()
            info_serializer = ContactInfoSerializer(
                info_obj, many=True, context={'request': request}).data
            return Response(info_serializer, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No contact info found"}, status=status.HTTP_404_NOT_FOUND)


class BannerView(APIView):
    def get(self, request):
        try:
            banner_obj = Banner.objects.all()
            banner_serializer = BannerSerializer(
                banner_obj, many=True, context={'request': request}).data
            return Response(banner_serializer, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No banner found"}, status=status.HTTP_404_NOT_FOUND)


class AboutView(APIView):
    def get(self, request):
        try:
            about_obj = About.objects.all()
            about_serializer = AboutSerializer(
                about_obj, many=True, context={'request': request}).data
            return Response(about_serializer, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No about info found"}, status=status.HTTP_404_NOT_FOUND)


class ServiceView(APIView):
    def get(self, request):
        try:
            service_obj = Service.objects.all()
            service_serializer = ServiceSerializer(
                service_obj, many=True, context={'request': request}).data
            data = []
            for item in service_serializer:
                item_obj = ServiceItem.objects.all()
                item['item'] = ServiceItemSerializer(
                    item_obj, context={'request': request}, many=True).data
                data.append(item)
            return Response(data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No about found"}, status=status.HTTP_404_NOT_FOUND)


class WhychooseView(APIView):
    def get(self, request):
        try:
            whychoose_obj = Whychoose.objects.all()
            whychoose_serializer = WhychooseSerializer(
                whychoose_obj, many=True, context={'request': request}).data
            return Response(whychoose_serializer, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No about info found"}, status=status.HTTP_404_NOT_FOUND)


class GetprojectView(APIView):
    def get(self, request, *args, **kwargs):
        project_id = kwargs.get('id')
        if project_id:
            try:
                project = ProjectItem.objects.get(id=project_id)
                serializer = ProjectItemSerializer(project).data
                return Response(serializer, status=status.HTTP_200_OK)
            except ObjectDoesNotExist:
                return Response({'error': "No project found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            projects = ProjectItem.objects.all()
            projects_data = ProjectItemSerializer(projects, many=True).data
            return Response(data=projects_data, status=status.HTTP_200_OK)


class ProjectsView(APIView):
    def get(self, request):
        try:
            projects_obj = Projects.objects.all()
            projects_serializer = ProjectsSerializer(
                projects_obj, many=True, context={'request': request}).data
            data = []
            for item in projects_serializer:
                item_obj = ProjectItem.objects.all()
                item['item'] = ProjectItemSerializer(
                    item_obj, context={'request': request}, many=True).data
                data.append(item)
            return Response(data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No projects found"}, status=status.HTTP_404_NOT_FOUND)


class TeammemberView(APIView):
    def get(self, request):
        try:
            team_obj = Teammember.objects.all()
            team_serializer = TeammemberSerializer(
                team_obj, many=True, context={'request': request}).data
            return Response(team_serializer, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No about info found"}, status=status.HTTP_404_NOT_FOUND)


class TestimonialView(APIView):
    def get(self, request):
        try:
            test_obj = Testimonial.objects.all()
            test_serializer = TestimonialSerializer(
                test_obj, many=True, context={'request': request}).data
            data = []
            for item in test_serializer:
                item_obj = TestItem.objects.all()
                item['item'] = TestItemSerializer(
                    item_obj, context={'request': request}, many=True).data
                data.append(item)
            return Response(data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No about found"}, status=status.HTTP_404_NOT_FOUND)
