redis-cli -h 127.0.0.1 -p 6379


config get requirepass //获取当前密码

config set requirepass "yourpassword"


systemctl restart redis.service // 重启redis

auth "yourpassword" //登录 


ps -ef |grep redis
kill -9 13224 -- 杀死redis进程
ps -ef |grep redis --确认杀死
./redis-server ../redis.conf --重启redis，指定配置文件
ps -ef |grep redis
root 9309 1 0 15:22 ? 00:00:00 ./redis-server *:6379
root 9727 8627 0 15:28 pts/1 00:00:00 grep redis
/redis-cli -h 127.0.0.1 -p 6379 --不用密码登录测试
127.0.0.1:6379> keys *
(error) NOAUTH Authentication required. --拒绝操作
./redis-cli -h 127.0.0.1 -p 6379 -a xxx@68 --加-a用密码登录
127.0.0.1:6379> select 1
OK --修复成功