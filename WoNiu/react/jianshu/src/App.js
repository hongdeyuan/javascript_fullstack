import React from 'react';
import Header from './common/header/index'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <div className="app">
      {/* Provider可以直接连通store这个仓库 */}
      <Provider store={store}>
        <Header/>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/detail' component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
