from .models import Appointment
from .serializers import AppointmentSerializer
from rest_framework import generics, mixins
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated



class AppointmentList(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    authentication_classes = [TokenAuthentication,BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request):
        return self.list(request)

    def post(self,request):
        return self.create(request)

class AppointmentDetail(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    authentication_classes = [TokenAuthentication,BasicAuthentication]#BasicAuthentication,
    permission_classes = [IsAuthenticated]
    
    def get(self,request,pk):
        return self.retrieve(request,pk)

    def put(self,request,pk):
        return self.update(request,pk)

    def delete(self,request):
        return self.destroy(request,pk)

"""
class AppointmentList(APIView):
    def get(self,request):
        appointment = Appointment.objects.all()
        serializer = AppointmentSerializer(appointment,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AppointmentDetail(APIView):
    def get_object(self,pk):
        try:
            return Appointment.objects.get(pk=pk)
        except Appointment.DoesNotExist:
            raise Http404

    def get(self,request,pk):
        appointment = self.get_object(pk)
        serializer = AppointmentSerializer(appointment)
        return Response(serializer.data)

    def put(self,request,pk):
        appointment = self.get_object(pk)
        serializer = AppointmentSerializer(appointment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        appointment = self.get_object(pk)
        appointment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


        
        


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
"""
