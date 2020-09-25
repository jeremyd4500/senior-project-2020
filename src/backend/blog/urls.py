from django.urls import path
from . views import *
from Appointments import views as appointment
#from authapp import views as authapp



urlpatterns = [
    #path('add_post/', AddPostView.as_view(), name="add_post"),
    path('', PostList.as_view(), name="home"),
    path('<int:pk>/', PostDetail.as_view(), name="post_detail"),
    #path('about', about, name="about"),
    #path('contact', contact, name="contact"),
    #path('appointment/index', appointment.index, name="appointment"),




]
