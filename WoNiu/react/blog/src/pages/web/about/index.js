import React, { Component } from 'react'
import { Card, Tag, Divider } from 'antd'
import './index.less'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  render() {
    return (
      <div>
        <Card>
            <Divider orientation="left">Blog</Divider>
            <p>一直基于 vue 写业务，所以博客选用了 react + react-router + mbox 这套技术栈，借此熟悉下 react 开发模式</p>
            <p>纯函数式开发，很甜</p>
            <p>前端：react + antd + react-router + es6 + webpack + axios</p>
            <p>服务端：koa2 + mysql + sequelize</p>
            <p className="code">源码戳这里</p>
            <p>
              <a 
                target="_blank" 
                className="link" 
                rel="noreferrer noopener" 
                href="https://github.com/hongdeyuan">
                web端
              </a>
            </p>
            <Divider orientation="left">ME</Divider>
            <ul className="about-list">
              <li>姓名：袁德红</li>
              <li>
              <svg viewBox="64 64 896 896" className="" data-icon="github" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>：
                <a target="_blank" className="link" rel="noreferrer noopener" href="https://github.com/hongdeyuan">github</a>
              </li>
              <li>联系方式：
                <span>18797850718</span>&nbsp;&nbsp;| &nbsp;&nbsp; 
                <a href="mailto:1737407069@qq.com">1737407069@qq.com</a>
              </li>
              <li>坐标：宜春市</li>
              <li>学历专业：本科<div className="ant-divider ant-divider-vertical"></div>软件工程</li>
              <li>
                skill：
                <ul>
                  <li>前端：Vue、React、ES6、Echat、Axios</li>
                  <li>服务端：Node、Koa2、express、java</li>
                  <li>数据库：Mysql、Oracle、sqlServer</li>
                  <li>其他：webpack、git、nginx</li>
                </ul>
              </li>
            </ul>
          </Card>
      </div>
    );
  }
}

export default About