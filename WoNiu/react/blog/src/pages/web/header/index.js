import React, { Component } from 'react'
import { Layout, Row, Col, Menu } from 'antd'
import {
  SmileOutlined,
  HomeOutlined,
  StarOutlined,
  EditOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import menus from '../../../Router/web'
import './index.less'

const { Header } = Layout

class HeaderCustom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render () {
    const key = sessionStorage.getItem('webKey') || '0'

    const list = menus.filter(v => v.menu)
    const menuList = list.map((item, i) => {
      return <Menu.Item key={i}>
              <Link to={item.path}>
                <item.icon />
                {/* <HomeOutlined /> */}
                <span className="nav-text">{item.title}</span>
              </Link>
             </Menu.Item>
    })
    return (
      <Header className="header-container">
        <Row>
          <Col lg={{span: 4}} md={{span: 4}} xs={{span: 0}}>
            <div className="logo">
              <SmileOutlined />
              旅梦博客开发
            </div>
          </Col>
          <Col lg={{span: 14}} md={{span: 14}} xs={{span: 24}} className="mobile">
            <Menu mode="horizontal" defaultSelectedKeys={[key]}>
              { menuList }
            </Menu>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default HeaderCustom