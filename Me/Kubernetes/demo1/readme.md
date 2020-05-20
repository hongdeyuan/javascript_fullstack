## docker

    docker image build -t hello_docker .

    docker ps -a    #显示所又的容器信息
    docker ps -l     #显示最新运行的容器

    使用docker commit 对于修改的容器进行保存

    docker commit  CONTAINER ID docker_hub用户名/镜像名

    docker push dehongyuan/hello_docker