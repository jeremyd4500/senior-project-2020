from .models import User
from .serializers import *
from rest_framework import generics, mixins
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend

# class UserRoleList(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
class UserRoleList(generics.ListAPIView):
    #queryset = User.objects.all()
    # serializer_class = UserCreateSerializer
    # authentication_classes = [TokenAuthentication,BasicAuthentication]
    # permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_role']

    # def get_queryset(self):
    #     status_id = self.request.query_params.get('user_role',False)
    #     if status_id:
    #         user_role = User.objects.filter(user_role= status_id)
    #     else:
    #         user_role = User.objects.all()
    #     return user_role



class DoctorDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    # authentication_classes = [TokenAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)