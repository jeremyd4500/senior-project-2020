#from django.views import generic
#from django.shortcuts import render
#from rest_framework.response import Response
#from rest_framework.views import APIView
#from django.http import Http404
from .models import Post
from .serializers import PostSerializer
from rest_framework import status, generics, mixins
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class PostList(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    #authentication_classes = [BasicAuthentication,TokenAuthentication]
    #permission_classes = [IsAuthenticated]

    def get(self,request):
        return self.list(request)
    
    def post(self,request):
        return self.create(request)


class PostDetail(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    #authentication_classes = [BasicAuthentication] #TokenAuthentication,
    #permission_classes = [IsAuthenticated]

    def get(self,request,pk):
        return self.retrieve(request, pk)
    def put(self,request,pk):
        return self.update(request, pk)
    
    def delete(self, request,pk):
        return self.destroy(request, pk)

"""
class PostList(APIView):
    def get(self,request):
        post = Post.objects.all()
        serializer = AppointmentSerializer(post,many=True)
        return Response(serializer.data)

    def post(selfself,request):






class PostList(generic.ListView):
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    template_name = 'blog/index.html'

class AddPostView(generic.CreateView):
    model = Post
    template_name = 'blog/add_post.html'
    fields = '__all__'#['title', 'slug', 'author', 'update_on', 'content', 'videofile', 'created_on', 'status']



class PostDetail(generic.DetailView):
    model = Post
    template_name = 'blog/post_detail.html'




def about(request):
    return render(request, 'blog/about.html', {})

def contact(request):
    return render(request, 'blog/contact.html', {})
"""