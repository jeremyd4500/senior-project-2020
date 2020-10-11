from django.urls import path
from . import views

urlpatterns = [
    path('', views.AppointmentList.as_view(), name="home"),
    path('<int:pk>', views.AppointmentDetail.as_view()),
    # path('report', views.ReportList.as_view(), name="report"),
    # path('report/<int:pk>', views.ReportDetail.as_view()),


]
