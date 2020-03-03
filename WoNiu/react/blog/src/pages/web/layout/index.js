import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import routes from '../../../Router/web'
import { Layout, Col, BackTop } from 'antd'

import HeaderCustom from '../header'
import SiderCustom from '../sider'

import './index.less'

const { Content, Footer } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const contentHeight = document.body.clientHeight - 64 - 32
    return (
      <div>
        <Layout className="wrapper">
          <HeaderCustom></HeaderCustom>

          <Layout className="wrapper-container">
            <Layout className="wrapper-content">
              <Content style={{ display: 'flex', paddingTop: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial' }}>
                <Col
                  lg={{ span: 5, offset: 1 }}
                  md={{ span: 6, offset: 1 }}
                  xs={{ span: 0 }}>
                  <SiderCustom />
                </Col>

                <Col
                  lg={{ span: 16, offset: 1 }}
                  md={{ span: 16, offset: 1 }}
                  xs={{ span: 24 }} className="about-wrapper">
                  {
                    routes.map(({ path, key, component, ...props }, index) => (
                      <Route
                        key={index}
                        exact
                        path={path}
                        component={component}
                        {...props}
                      />
                    ))
                  }
                </Col>
              </Content>
            </Layout>

            <Footer>persional blog</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Index