from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
STATUS = (
    (0,"Admin"),
    (1, "Doctor"),
    (2, "Patient")
)

class User(AbstractUser):
    #email = models.EmailField(verbose_name='email', max_length=255, unique=True),
    phone = models.CharField(null=True, max_length=255)
    user_role = models.IntegerField(choices=STATUS, default=2)
    REQUIRED_FIELDS = ['first_name','last_name','email','phone','user_role']
    #USERNAME_FIELD = 'email'

#     def get_username(self):
#         return self.email
