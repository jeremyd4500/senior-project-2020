from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

        # 'FirstName',
        # 'LastName',
        # 'Age',
        # 'email',
        # 'Date',
        # 'ap_date',
        # 'author',
        # 'Time',
        # 'Gender',
        # 'description'


