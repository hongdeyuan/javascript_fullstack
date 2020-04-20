import App from 'next/app'

import 'antd/dist/antd.css'

import Layout from '../components/Layout'

// 固定layout布局
// rudux引用
// 公有资源

class MyApp extends App {

  // 判断当前的组件中的 getInitialProps
  static async getInitialProps ({ Component, ctx }) {
    let pageProps

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps
    }
  }

  render() {

    // Component: 代表pages下所有的页面
    const { Component, pageProps } = this.props
    return (
        <Layout>
          <Component { ...pageProps} />
        </Layout>
    )
  }
}

export default MyApp