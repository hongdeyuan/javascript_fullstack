import React from 'react';
import {Route, Link } from 'react-router-dom'
import {Layout, Row, Col, Avatar, Input, Menu, Dropdown, Badge} from 'antd'
import { UserOutlined,DownOutlined } from '@ant-design/icons';
const { Header, Sider, Content, Footer }  = Layout
 
function DropMenu() {
  return (
    <Menu>
      <Menu.Item key="1">
        <a href="#">修改密码</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">退出</a>
      </Menu.Item>
    </Menu>
  )
}

class PageLayout extends React.Component {

  

  render() {
    return (
      <Layout>
        <Header style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
          <Row>
            <Col span={10}>React + Antd实践</Col>
            <Col span={8}>
              <Input placeholder='请输入你想要的'></Input>
            </Col>
            <Col span={6}>
              <Avatar style={{backgroundColor: '#666', marginRight: 20}} icon={<UserOutlined />} />
              <Dropdown overlay={DropMenu} >
               <a>Hi<DownOutlined /></a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
      </Layout>
    )
  }
}

export default PageLayout;