from django import forms
from .models import Appointment

class AppointmentForm(forms.Form):
    class Meta:
        model = Appointment
        fields =[ 'FirstName', 'LastName', 'Age', 'email', 'Date', 'ap_date',
            'author', 'Time', 'Gender', 'description'
        ]
