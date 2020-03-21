import React from 'react'
import Loadable from 'react-loadable';
// 路由按需加载
const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: () => {
    return <div>
      正在加载
    </div>
  }
});

// 返回无状态组件
export default () => <LoadableComponent/>