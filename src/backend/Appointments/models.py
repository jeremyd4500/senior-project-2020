from django.db import models
from django.conf import settings
import datetime
from django.contrib.auth.models import User

# Create your models here.
class Appointment(models.Model):
    GENDER =(
        ('M', 'Male'),
        ('F', 'Female'),
    )
    FirstName = models.CharField(max_length=30)
    LastName = models.CharField(max_length=30)
    Age = models.IntegerField()
    email = models.EmailField(max_length=254, blank=True)
    Date = models.DateField(auto_now=True)
    ap_date = models.DateField(blank=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    #author = models.ForeignKey(User, on_delete=models.CASCADE)
    Time = models.TimeField(blank=True)
    Gender = models.CharField(max_length=1, choices=GENDER)
    description = models.TextField()

    def __str__(self):
        return (self.FirstName +" " +self.LastName)


