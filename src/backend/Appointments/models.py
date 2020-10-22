from django.db import models
from django.conf import settings
import datetime
from django.contrib.auth.models import User

# Create your models here.
class Appointment(models.Model):
    GENDER =(
        (0, 'Male'),
        (1, 'Female'),
    )

    STATUS = (
        (0,'Pending'),
        (1,'Schedule'),
        (2,'No show'),
        (3, 'Completed')
    )
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    age = models.IntegerField()
    email = models.EmailField(max_length=254, blank=True)
    date = models.DateField(auto_now=True)
    appointment_date = models.DateField(blank=True)
    #user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    doctor_id = models.IntegerField(blank=True, null=True)
    time = models.TimeField(blank=True)
    gender = models.IntegerField(default=0, choices=GENDER)
    status = models.IntegerField(choices=STATUS, default=0)
    description = models.TextField()

    def __str__(self):
        return (self.first_name +" " +self.last_name)





