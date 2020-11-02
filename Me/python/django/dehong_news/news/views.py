from django.shortcuts import render

from .models import Post

# request：请求对象，直接把视图的参数 request 传进来就可以
# template_name：模板名称，这里就是我们刚刚创建的 news/index.html
# context：传入模板的上下文对象，必须是一个字典，字典中的每个键对应模板中的变量。这里我们弄了些假数据，假装是从数据库里面取来的

def index(request):

    context = { 'news_list': Post.objects.all() }

    return render(request, 'news/index.html', context=context)
