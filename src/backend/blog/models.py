from django.db import models
from django.conf import settings
from django.urls import reverse
from django.contrib.auth.models import User


STATUS = (
    (0,"Draft"),
    (1, "Publish")
)

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    update_on = models.DateField(auto_now=True)
    content = models.TextField()
    videofile = models.FileField(upload_to='videos/', null=True, verbose_name="", blank=True)
    created_on = models.DateField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title + ' | ' + str(self.author)

    def get_absolute_url(self):
        #return reverse('post_detail',args=(str(self.slug)))
        return reverse('home')