from django.urls import path
from . views import AddPostView, contact, about, PostList, PostDetail
from Appointments import views as appointment
from authentication import views as authentication


urlpatterns = [
    path('add_post/', AddPostView.as_view(), name="add_post"),
    path('', PostList.as_view(), name="home"),
    path('<slug:slug>/', PostDetail.as_view(), name="post_detail"),
    path('about', about, name="about"),
    path('contact', contact, name="contact"),
    path('appointment/index', appointment.index, name="appointment"),




]
