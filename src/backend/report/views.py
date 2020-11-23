from .models import Report
from .serializers import ReportSerializer
from rest_framework import generics, mixins
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class ReportList(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    # authentication_classes = [TokenAuthentication,BasicAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self,request):
        return self.list(request)

    def post(self,request):
        return self.create(request)


class ReportDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    # authentication_classes = [TokenAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)

