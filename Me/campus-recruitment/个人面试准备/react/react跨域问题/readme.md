# React 跨域

> 项目需要经常会需要对不同域名、不同子域的网站接口发起请求，有时甚至是对于同一域名的不同端口发起请求

  所以当我们需要请求不同域名下的数据时，总会遇到整个错误：
  

  ```js
  Access to XMLHttpRequest at 'xxx' from origin 'xxx' has been blocked by CORS 
policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  ```

而为啥会出现整个问题，就不多说了，下面说下以往的解决方案:

## 1. package.json中配置proxy

  ```js//package.json加入
  "proxy": "http://open.douyucdn.cn",

  or

  //package.json中加入
  "proxy": {
    "/api": {
      "target": "https://api.github.com/users/octocat/gists",
      "changeOrigin":true
    }
  },
  ```

  以前很多人使用这种方法，而小编提醒一下读者，此方法已经失效，官方已经废弃了它。因此,你启动项目时，你会看到这个错误：

  ```js
  When specified, "proxy" in package.json must be a string.
Instead, the type of "proxy" was "object".
Either remove "proxy" from package.json, or make it a string.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! r-d-m@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
  ```

## 2. npm run eject，开启config文件进行配置
  首先，
  `npm install http-proxy-middleware`，安装该模块，然后,在webpack.config.js中，进行配置，配置如下：
  ```js
  var proxy = require('http-proxy-middleware')
    module.exports = {
        devServer: {
           host: 'localhost',
           port: '3000',
           proxy: [
               {
                    context: '/api',
                    target: 'https://api.github.com/users/octocat/gists',
                    changeOrigin: true,
              },{
                    context: '/dobian',
                    target: 'https://www.api.dobian.cn',
                    changeOrigin: true,
              }
           ]
        }
    }
  ```

注意：该解决方案，小编试过一次没成功，不推荐，或许原因是因为没有使用最新的createProxyMiddleware 方法来替代proxy，读者可以试下把proxy替换成createProxyMiddleware试下，是否能成功。


## 3. 小编推荐的解决方案

  1. 安装http-proxy-middleware，`npm install http-proxy-middleware`
  2. 在react项目的src目录下创建setupProxy.js，配置如下：

  ```js
  const { createProxyMiddleware } = require('http-proxy-middleware');

  module.exports = function (app) { 
    app.use(createProxyMiddleware('/api', {target: 'http://xiangxi.red', changeOrigin: true}))  
  }  
  ```

  3. 测试是否成功

    - 在需要跨域数据请求的页面先，引入axios,在使用axios进行数据请求

    ```js
    componentDidMount () {
      this.getList()
    }

    async getList() {
      const that = this
      const params = {
        pageNo: 1,
        pageSize: 5
      }
      axios({
        method: "GET",
        url: "/api/article/list",
        params
      })
      .then(function (response) {
        
        if (response.data.code === 1000) {
          // console.log(response.data.data);
          that.setState({
            data: response.data.data
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    ```