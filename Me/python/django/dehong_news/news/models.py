from django.db import models

# 1 Create your models here.
# 2 python3 manage.py makemigrations : 命令创建迁移文件
# 3 python3 manage.py migrate: 接着我们进行数据库迁移
# 4 python3 manage.py createsuperuser: 创建用于登录后台管理的超级用户

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title
