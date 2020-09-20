from django.shortcuts import render
from django.views import generic
from .models import Appointment
from .forms import AppointmentForm


def index(request):
    return render(request, 'Appointment/index.html', {})

# class index(generic.ListView):
#     queryset = Appointment.objects.filter(author=1)
#     template_name = 'Appointment/index.html'


def set_appointment(request):
    return render(request, 'Appointment/set_appointment.html',{})

def showform(request):
    form=AppointmentForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {'form':form}
    
    return render(request, 'set_appointment.html',context)