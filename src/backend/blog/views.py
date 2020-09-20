from django.views import generic
from .models import Post
from django.shortcuts import render

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
