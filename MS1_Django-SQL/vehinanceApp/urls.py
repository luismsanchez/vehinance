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
]