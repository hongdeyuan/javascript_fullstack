from django.urls import path
# news child route
# route：必须，即实际的访问路由，空字符串等于 /，即空路由
# view：必须，该路由将要访问的视图
# name：可选，该路由的名称，方便后续在模板中使用
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]