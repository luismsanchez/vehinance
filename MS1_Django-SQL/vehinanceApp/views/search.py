from rest_framework import generics
from django.contrib.auth.models import User
from ..models import *
from ..serializers import *

class VehiclesByUser(generics.ListAPIView):
    serializer_class = VehicleSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(pk=kwargs['pk'])
        self.queryset = Vehicle.objects.filter(user=user).order_by('brand')
        return self.list(request, *args, **kwargs)


class SystemsByVehicle(generics.ListAPIView):
    serializer_class = SystemSerializer

    def get(self, request, *args, **kwargs):
        vehicle = Vehicle.objects.get(pk=kwargs['pk'])
        self.queryset = System.objects.filter(vehicle=vehicle).order_by('system_name')
        return self.list(request, *args, **kwargs)


class ComponentsBySystem(generics.ListAPIView):
    serializer_class = ComponentSerializer

    def get(self, request, *args, **kwargs):
        system = System.objects.get(pk=kwargs['pk'])
        self.queryset = Component.objects.filter(system=system).order_by('component_name')
        return self.list(request, *args, **kwargs)


class ActivitiesByUser(generics.ListAPIView):
    serializer_class = ActivitySerializer

    def get(self, request, *args, **kwargs):
        flag = False
        user = User.objects.get(pk=kwargs['pk'])
        for vehicle in Vehicle.objects.filter(user=user).order_by('brand'):
            for system in System.objects.filter(vehicle=vehicle).order_by('system_name'):
                for component in Component.objects.filter(system=system).order_by('component_name'):
                    if flag == False:
                        qs1 = Activity.objects.filter(component=component)
                        flag == True
                    else:
                        qs2 = Activity.objects.filter(component=component)
                        qs1.union(qs2)
        self.queryset = qs1
        return self.list(request, *args, **kwargs)


class ActivitiesByVehicle(generics.ListAPIView):
    serializer_class = ActivitySerializer

    def get(self, request, *args, **kwargs):
        flag = False
        vehicle = Vehicle.objects.get(pk=kwargs['pk'])
        for system in System.objects.filter(vehicle=vehicle).order_by('system_name'):
            for component in Component.objects.filter(system=system).order_by('component_name'):
                if flag == False:
                    qs1 = Activity.objects.filter(component=component)
                    flag == True
                else:
                    qs2 = Activity.objects.filter(component=component)
                    qs1.union(qs2)
        self.queryset = qs1
        return self.list(request, *args, **kwargs)


class ActivitiesBySystem(generics.ListAPIView):
    serializer_class = ActivitySerializer

    def get(self, request, *args, **kwargs):
        flag = False
        system = System.objects.get(pk=kwargs['pk'])
        for component in Component.objects.filter(system=system).order_by('component_name'):
            if flag == False:
                qs1 = Activity.objects.filter(component=component)
                flag == True
            else:
                qs2 = Activity.objects.filter(component=component)
                qs1.union(qs2)
        self.queryset = qs1
        return self.list(request, *args, **kwargs)


class ActivitiesByComponent(generics.ListAPIView):
    serializer_class = ActivitySerializer

    def get(self, request, *args, **kwargs):
        component = Component.objects.get(pk=kwargs['pk'])
        self.queryset = Activity.objects.filter(component=component)
        return self.list(request, *args, **kwargs)