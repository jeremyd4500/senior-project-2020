from django.db import models
import datetime

# Create your models here.
class Appointment(models.Model):
    GENDER =(
        ('M', 'Male'),
        ('F', 'Female'),
    )
    FirstName = models.CharField(max_length=30)
    LastName = models.CharField(max_length=30)
    Age = models.IntegerField()
    Date = models.DateField(auto_now=True)
    Time = models.TimeField(auto_now=True)
    Gender = models.CharField(max_length=1, choices=GENDER)
    description = models.TextField()

    def __str__(self):
        return (self.FirstName +" " +self.LastName)


