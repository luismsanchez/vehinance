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
    CHOICES = (
        (1, 'daily'),
        (7, 'weekly'),
        (30, 'monthly'),
        (90, 'three-monthly'),
        (180, 'six-monthly'),
        (365, 'yearly'),
        (730, 'two-yearly'),
        (1095, 'three-yearly'),
        (1460, 'four-yearly'),
        (1825, 'five-yearly'),
        (2190, 'six-yearly'),
        (2555, 'seven-yearly'),
        (2920, 'eight-yearly'),
    ) 
    component = models.ForeignKey(Component, on_delete=models.CASCADE)
    distance_interval = models.PositiveIntegerField(default=0)
    time_interval = models.PositiveIntegerField(default=0)
    activity_description = models.TextField(blank=True)
    def __str__(self):
        return self.activity_description