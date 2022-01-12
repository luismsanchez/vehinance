from rest_framework import generics
from ..models import System
from ..serializers import SystemSerializer

class SystemListCreate(generics.ListCreateAPIView):
    queryset = System.objects.all()
    serializer_class = SystemSerializer

class SystemUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = System.objects.all()
    serializer_class = SystemSerializer