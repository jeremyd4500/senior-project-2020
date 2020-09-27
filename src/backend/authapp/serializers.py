from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from .models import *

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields ='__all__' #('id','email','username','password','first_name','last_name','phone','user_role','date_of_birth')