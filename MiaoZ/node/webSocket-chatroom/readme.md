## websocket
  - http webSocket
  - http1.1: client ->>> server
  - websocket: clent -> server ; server- > client
    全双工 双向通信

  - http2.0: 支持 server-push 服务端推送
  - npm i ws -S

## 链接
  1. 第一步会发送一个 http请求
    后端响应：101 Switching Protocols
    Connection: Upgrade
    之后 由http 协议 升级位 websocket 后续的发送 接收信息否会走 这个
    全双工 双向通道