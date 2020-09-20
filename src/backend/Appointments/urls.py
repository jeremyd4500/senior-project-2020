from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('set_appointment/', views.set_appointment, name="set_appointment"),
]
