import React from 'react';
import Header from './common/header/index'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home/index'
import Detail from './pages/detail/loadable'
import Login from './pages/login/index'
import Write from './pages/write/index'

function App() {
  return (
    <div className="app">
      {/* Provider可以直接连通store这个仓库 */}
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
          <div>
            <Route exact path='/' component={Home}></Route>
            {/* 1.问号： 传参 */}
            {/* <Route path='/detail?id' component={Detail}></Route> */}
            <Route path='/detail/:id' component={Detail}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/write' component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
