from django.shortcuts import render
from rest_framework import views, authentication, permissions, status
from rest_framework.response import Response
from ..serializers import UserSerializer, UserCreationSerializer

class UserRetrieve(views.APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user) 
        return Response(data=serializer.data, status=status.HTTP_200_OK)




