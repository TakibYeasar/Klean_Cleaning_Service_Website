import json

from django.http import JsonResponse
from rest_framework import views, viewsets, generics, mixins
from .models import *
from .serializers import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated



class RegisterView(views.APIView):
    def post(self, request):
        serializers = UserSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({"error": False, "message": f"user is created for '{serializers.data['username']}' ",
                             "data": serializers.data})
        return Response({"error": True, "message": serializers.errors, "status": status.HTTP_400_BAD_REQUEST})


class ProfileView(views.APIView):
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    def get(self, request):
        try:
            query = Profile.objects.get(user=request.user)
            serializer = ProfileSerializers(query)
            response_message = {"error": False, "data": serializer.data}
        except Exception as e:
            print(e)
            response_message = {"error": True, "message": "Something went Wrong"}
        return Response(response_message)



class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response(status=HTTP_204_NO_CONTENT)


class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = serializers.ChangePasswordSerializer
    permission_classes = (IsAuthenticated, )

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=HTTP_400_BAD_REQUEST)
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            update_session_auth_hash(request, self.object)
            return Response("Password changed successfully.")
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    


class UpdateUser(views.APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request):
        try:
            user = request.user
            data = request.data
            user_obj = User.objects.get(username=user)
            user_obj.first_name = data["first_name"]
            user_obj.last_name = data["last_name"]
            user_obj.email = data["email"]
            user_obj.save()
            response_data = {"error": False, "message": "User Data is Updated"}
        except Exception as e:
            print(e)
            response_data = {"error": True, "message": "User Data is not Update Try Again!!!"}
        return Response(response_data)


class UpdateProfile(views.APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request):
        try:
            user = request.user
            query = Profile.objects.get(user=user)
            data = request.data
            serializers = ProfileSerializers(query, data=data, context={"request": request})
            serializers.is_valid(raise_exception=True)
            serializers.save()
            return_res = {"message": "Profile is Updated"}
        except Exception as e:
            print(e)
            return_res = {"message": "Something went Wrong Try Again!!!"}
        return Response(return_res)
