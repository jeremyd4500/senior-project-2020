from django.shortcuts import render
from .models import Appointment
from .forms import AppointmentForm


# Create your views here.
def index(request):
    return render(request, 'Appointment/index.html', {})


def set_appointment(request):
    return render(request, 'Appointment/set_appointment.html',{})

def showform(request):
    form=AppointmentForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {'form':form}
    
    return render(request, 'set_appointment.html',context)