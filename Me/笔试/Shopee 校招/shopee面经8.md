
1.开始说考察我的数据结构先让我写了三题算法题二叉树的DFS，BFS，以及求深度
（这三题写出来了）

2.问计算机网络，先问了我五层协议（按照理解回答）然后问了我TCP有哪些字段（我真的懵了，一个都想不起来）面试官提醒了我一些。但是答的还是不是很好
  五层协议:

    第五层: ——应用层
      - 应用层(application layer)：是体系结构中的最高。直接为用户的应用进程（例如电子邮件、文件传输和终端仿真）提供服务。
      - 主要协议： Http协议、 FTP协议，POP3协议

    第四层: ——传输层
      - 传输层(transport layer)：负责向两个主机中进程之间的通信提供服务
      - 主要协议有： TCP和UDP协议

    第三层： ——网络层
      - 负责为分组交换网上的不同主机提供通信服务
      - 主要协议: IP,ICMP,IGMP,ARP,RARP

    第二层: ——数据链路层
      - 数据链路层将网络层交下来的IP数据报组装成帧(framing)，在两个相邻结点之间的链路上“透明”地传送帧中的数据
    
    第一层: ——物理层
      - 在物理层上所传数据的单位是比特, 比特流传输

  TCP字段： SYN, ACK,seq FIN PSH RST


  [参考](https://blog.csdn.net/qq_22238021/article/details/80279001)

3.问了我http的字段有哪些，我就答了我知道的缓存的/content-type.有一个点我没答上来，no-store和no-cache是key的形式还是？？（忘记了）形式。我说可能是true/false形式

  Cache-Control : 缓存
  Content-Type： 数据接受格式
  Etag：  协商缓存
  Status Code： 请求码
  Referer： 目标网址
  Request Method： 请求方法

4.面试官说那我们问一下JS相关的吧

给了三题：一题原型链，一个promise判断输出，一个实现一个函数。

