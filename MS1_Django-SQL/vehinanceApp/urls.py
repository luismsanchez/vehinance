from django.urls import path
from .views import *

urlpatterns = [
    path('vehicle/', VehicleListCreate.as_view()),
    path('vehicle/<pk>/', VehicleUpdateDelete.as_view()),
    path('system/', SystemListCreate.as_view()),
    path('system/<pk>/', SystemUpdateDelete.as_view()),
    path('component/', ComponentListCreate.as_view()),
    path('component/<pk>/', ComponentUpdateDelete.as_view()),
    path('activity/', ActivityListCreate.as_view()),
    path('activity/<pk>/', ActivityUpdateDelete.as_view()),
    path('user/', UserRetrieve.as_view()),
    path('search/vehicles/<pk>', VehiclesByUser.as_view()),
    path('search/systems/<pk>', SystemsByVehicle.as_view()),
    path('search/components/<pk>', ComponentsBySystem.as_view()),
    path('search/activities/user/<pk>', ActivitiesByUser.as_view()),
    path('search/activities/vehicle/<pk>', ActivitiesByVehicle.as_view()),
    path('search/activities/system/<pk>', ActivitiesBySystem.as_view()),
    path('search/activities/component/<pk>', ActivitiesByComponent.as_view()),    
]