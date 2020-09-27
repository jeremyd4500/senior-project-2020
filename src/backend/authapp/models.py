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
    (0,'Alabama - AL'),
    (1,'Alaska - AK'),
    (2,'Arizona - AZ'),
    (3,'Arkansas - AR'),
    (4,'California - CA'),
    (5,'Colorado - CO'),
    (6,'Connecticut - CT'),
    (7,'Delaware - DE'),
    (8,'Florida - FL'),
    (9,'Georgia - GA'),
    (10,'Hawaii - HI'),
    (11,'Idaho - ID'),
    (12,'Illinois - IL'),
    (13,'Indiana - IN'),
    (14,'Iowa - IA'),
    (15,'Kansas - KS'),
    (16,'Kentucky - KY'),
    (17,'Louisiana - LA'),
    (18,'Maine - ME'),
    (19,'Maryland - MD'),
    (20,'Massachusetts - MA'),
    (21,'Michigan - MI'),
    (22,'Minnesota - MN'),
    (23,'Mississippi - MS'),
    (24,'Missouri - MO'),
    (25,'Montana - MT'),
    (26,'Nebraska - NE'),
    (27,'Nevada - NV'),
    (28,'New Hampshire - NH'),
    (29,'New Jersey - NJ'),
    (30,'New Mexico - NM'),
    (31,'New York - NY'),
    (32,'North Carolina - NC'),
    (33,'North Dakota - ND'),
    (34,'Ohio - OH'),
    (35,'Oklahoma - OK'),
    (36,'Oregon - OR'),
    (37,'Pennsylvania - PA'),
    (38,'Rhode Island - RI'),
    (39,'South Carolina - SC'),
    (40,'South Dakota - SD'),
    (41,'Tennessee - TN'),
    (42,'Texas - TX'),
    (43,'Utah - UT'),
    (44,'Vermont - VT'),
    (45,'Virginia - VA'),
    (46,'Washington - WA'),
    (47,'West Virginia - WV'),
    (48,'Wisconsin - WI'),
    (49,'Wyoming - WY')

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
    state = models.CharField(null=True, max_length=255, choices=STATES)
    user_role = models.IntegerField(choices=STATUS, default=2)
    #date_of_birth = models.DateField(blank=True)
    REQUIRED_FIELDS = ['first_name','last_name','sex','email','phone','user_role','address','city','state']
    #USERNAME_FIELD = 'email'

#     def get_username(self):
#         return self.email
