from django.contrib import admin
from .models import Vehicle, System, Component, Activity

# Register your models here.

admin.site.register(Vehicle)
admin.site.register(System)
admin.site.register(Component)
admin.site.register(Activity)