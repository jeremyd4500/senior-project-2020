from django.urls import path
from . import views
from Appointments import views as appointment


urlpatterns = [
    path('', views.PostList.as_view(), name="home"),
    path('<slug:slug>/', views.PostDetail.as_view(), name="post_detail"),
    path('about', views.about, name="about"),
    path('contact', views.contact, name="contact"),
    path('index', appointment.index, name="appointment"),



]
