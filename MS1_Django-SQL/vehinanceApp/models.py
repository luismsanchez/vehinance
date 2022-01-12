from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Vehicle(models.Model):
    brand = models.CharField(max_length=25)
    model = models.CharField(max_length=25)
    odometer = models.PositiveBigIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.brand + " " + self.model

class System(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    system_name = models.CharField(max_length=25)
    system_description = models.TextField(blank=True)
    def __str__(self):
        return self.system_name

class Component(models.Model):
    system = models.ForeignKey(System, on_delete=models.CASCADE)
    component_name = models.CharField(max_length=25)
    component_description = models.TextField(blank=True)
    def __str__(self):
        return self.component_name

class Activity(models.Model):
    component = models.ForeignKey(Component, on_delete=models.CASCADE)
    distance_interval = models.PositiveIntegerField(default=0)
    time_interval = models.PositiveIntegerField(default=0)
    activity_description = models.TextField(blank=True)
    def __str__(self):
        return self.activity_description