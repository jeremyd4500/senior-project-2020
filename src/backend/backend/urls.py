from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from Appointments import views

urlpatterns = [

    path('', include('blog.urls')),
    path('admin/', admin.site.urls),
    path('appointment/', include('Appointments.urls')),
    path('blog/', include('blog.urls')),
    path('auth/', include('authapp.urls')),
    #path('', include('telemed.urls')),
    #path('rest/',views.AppointmentList.as_view()),
    #path('authentication/', include('django.contrib.auth.urls')),
]+ static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
