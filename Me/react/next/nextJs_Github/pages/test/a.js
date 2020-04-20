// import Comp from '../../components/comp'
import { withRouter } from 'next/router'
import Link from 'next/link'
import dynamic from 'next/dynamic'// 异步加载组件
// import Head from 'next/head'
import styled from 'styled-components'
// import moment from 'moment'

const Comp  = dynamic(import('../../components/comp'))

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const color = '#113366'
const A = ({ router, name, time }) => (
  <>
    <Title>{ time }</Title>
    <Comp />
    <Link href="#aaa">
      <a className='link'> A -> id = { router.query.id }, { name }</a>
    </Link>

    <style jsx>{`
      a{
        color: blue
      }
      .link{
        color: ${color}
      }
    `}
    </style>
  </>
)

// 可以在服务器端渲染执行，也在客户端执行
A.getInitialProps = async(ctx) => {
  // 没有跳来我A页面的时候此处的getInitialProps是不会执行的
  const moment = await import('moment')
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
          name: 'dhyuan',
          time: moment(Date.now() - 60 * 1000).fromNow()
      })
    }, 1000)
  })
  return await promise
  
}

export default withRouter(A)