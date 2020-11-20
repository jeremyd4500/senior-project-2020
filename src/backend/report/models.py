from django.db import models
from django.conf import settings
import datetime
from django.contrib.auth.models import User

class Report(models.Model):
    bp = models.IntegerField()
    temperature = models.DecimalField(max_digits=5, decimal_places=2)
    bmi = models.DecimalField(max_digits=5, decimal_places=2)
    pulse = models.IntegerField()
    weight = models.IntegerField()
    respiration = models.IntegerField()
    height = models.IntegerField()
    oxygen_saturation = models.IntegerField()
    date = models.DateField(auto_now=True)
    reportfile = models.FileField(upload_to='reports/', null=True, verbose_name="", blank=True)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


    # def __str__(self):
    #     return (self.user_id)
