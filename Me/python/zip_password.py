#codig:utf-8
 
import time
import zipfile
from threading import Thread
import multiprocessing
from multiprocessing import Queue
 
 
# input
path = "E:/备份文件/软件/庆@余#年HD高清 第34-40集完结 已更新/第34-40集.zip"      # 文件路径
g_maxprocess = 2   # 分配进程数
g_minlength = 6    # 最小长度
g_maxlength = 6    # 最大长度
g_startnum = 0       #开始数
 
thread_queue = []
# 字符集，将可能的字符放在此数组里面。
g_chars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z',
    '.', '#'
]
 
# 提取文件
def extractFile(binfile, password):
    try:
        binfile.extractall(pwd= bytes(password,"utf-8"))
        print("This file\'s password is " + password)
        return password
    except:
        return None
 
# 获取密码
def dict_builder(startnum=0, endnum= None, minlength=g_minlength, maxlength=g_maxlength, chars = g_chars):
 
    base = len(chars) ** (minlength-1)
    end = len(chars) ** maxlength
    if startnum > base:
        base = startnum
    if endnum is not None and endnum<end:
        end = endnum
    start = base
    def get_char(num):
        if num < len(chars):
            return chars[num]
        else:
            return get_char(num // len(chars)) + chars[num % len(chars)]
 
    for i in range(start, end):
        yield i, get_char(i)
 
         
def mainstep(id, queue, startnum=0, endnum= None):
    print("thread {} start: startnum:{}\tendnum:{}".format(id, startnum, endnum))
    binfile = zipfile.ZipFile(path)
    print("start dict_builder....")
    for Pwd in dict_builder(startnum, endnum):
        numnow = Pwd[0]
        print("now is:{}".format(Pwd[1]))
        if (numnow - startnum)%10000 == 0:
            queue.put("{} has deal with 10000,now is {} ,end is {}".format(id, numnow, endnum))
        password = extractFile(binfile, Pwd[1])
        if password is not None:
            queue.put("crack_ok")
            queue.put("password")
            break
    queue.put("exit")
    print("process {} exiting....".format(id))
 
    
# 创建进程
if __name__ == '__main__':
    maxnum = len(g_chars) ** g_maxlength
    numpct = 1./g_maxprocess
    num_pool = []
    for i in range(0, g_maxprocess):
        start = g_startnum + int(( maxnum - g_startnum) * numpct * i)
        end = g_startnum + int(( maxnum - g_startnum) * numpct * (i + 1))
        num_pool.append((start, end))
    pool = multiprocessing.Pool(processes=(g_maxprocess + 1))
    manager = multiprocessing.Manager()
    for i in range(0, g_maxprocess):
        q = manager.Queue()
        thread_queue.append(q)
        startnum, endnum = num_pool[i]
        pool.apply_async(func=mainstep, args=(i, q, startnum, endnum))
    pool.close()
    queuesize = [0 for i in range(len(thread_queue))]
    while True:
        for i in range(len(thread_queue)):
            q = thread_queue[i]
            if queuesize[i] != -1:
                size = q.qsize()
                queuesize[i] = size
                if size !=0:
                    str = q.get()
                    print(str)
                    if str == "crack_ok":
                        time.sleep(1)
                        paswd = q.get()
                        print("crack success pwd:{}".format(paswd))
                        break
                    if str == "exit":
                        queuesize[i] = -1
        if sum(queuesize) == 0:   # 队列为空，睡眠0.5S
            print("empty sleep...")
            time.sleep(0.5)
        if sum(queuesize) == 0 - len(thread_queue): # 进程全部退出，破解失败
            print("crack failed...")
            break
    print("kill all thread...")
    pool.terminate()
    print('All subprocesses done.')