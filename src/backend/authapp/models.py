from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

# Create your models here.
STATUS = (
    (0,"Admin"),
    (1, "Doctor"),
    (2, "Patient")
)

STATES = (
    ('AL','Alabama'),
    ('AK','Alaska'),
    ('AZ','Arizona'),
    ('AR','Arkansas'),
    ('CA','California'),
    ('CO','Colorado'),
    ('CT','Connecticut'),
    ('DE','Delaware'),
    ('FL','Florida'),
    ('GA','Georgia'),
    ('HI','Hawaii'),
    ('ID','Idaho'),
    ('IL','Illinois'),
    ('IN','Indiana'),
    ('IA','Iowa'),
    ('KS','Kansas'),
    ('KY','Kentucky'),
    ('LA','Louisiana'),
    ('ME','Maine '),
    ('MD','Maryland'),
    ('MA','Massachusetts'),
    ('MI','Michigan'),
    ('MN','Minnesota'),
    ('MS','Mississippi'),
    ('MO','Missouri'),
    ('MT','Montana'),
    ('NE','Nebraska'),
    ('NV','Nevada'),
    ('NH','New Hampshire '),
    ('NJ','New Jersey'),
    ('NM','New Mexico'),
    ('NY','New York'),
    ('NC','North Carolina'),
    ('ND','North Dakota'),
    ('OH','Ohio'),
    ('OK','Oklahoma'),
    ('OR','Oregon'),
    ('PA','Pennsylvania'),
    ('RI','Rhode Island'),
    ('SC','South Carolina'),
    ('SD','South Dakota'),
    ('TN','Tennessee'),
    ('TX','Texas'),
    ('UT','Utah'),
    ('VT','Vermont'),
    ('VA','Virginia'),
    ('WA','Washington'),
    ('WV','West Virginia'),
    ('WI','Wisconsin'),
    ('WY','Wyoming')

)

SEX = (
    (0,"MALE"),
    (1,"FEMALE")
)

class User(AbstractUser):
    #email = models.EmailField(verbose_name='email', max_length=255, unique=True),
    sex = models.IntegerField(choices=SEX, null=True)
    phone = models.CharField(null=True, max_length=255)
    address = models.CharField(null=True, max_length=255)
    city = models.CharField(null=True, max_length=255)
    state = models.CharField(null=True,max_length=2, choices=STATES)
    user_role = models.IntegerField(choices=STATUS, default=2)
    date_of_birth = models.DateField(blank=True)
    REQUIRED_FIELDS = ['first_name','last_name','sex','date_of_birth','email','phone','user_role','address','city','state']
    #USERNAME_FIELD = 'email'

#     def get_username(self):
#         return self.email
