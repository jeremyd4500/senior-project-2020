from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReportList.as_view(), name="home"),
    path('<int:pk>', views.ReportDetail.as_view()),
]
