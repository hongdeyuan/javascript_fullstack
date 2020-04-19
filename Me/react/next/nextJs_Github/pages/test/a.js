// import Comp from '../../components/comp'
import { withRouter } from 'next/router'
import Link from 'next/link'
const A = ({ router, name }) => <Link href="#aaa"><a> A -> id = { router.query.id }, { name }</a></Link>

// 可以在服务器端渲染执行，也在客户端执行
A.getInitialProps = async() => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
          name: 'dhyuan'
      })
    }, 1000)
  })
  return await promise
  
}

export default withRouter(A)