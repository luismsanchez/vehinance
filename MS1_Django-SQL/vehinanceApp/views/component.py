from rest_framework import generics
from ..models import Component
from ..serializers import ComponentSerializer

class ComponentListCreate(generics.ListCreateAPIView):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

class ComponentUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer