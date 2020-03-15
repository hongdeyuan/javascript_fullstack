import React from 'react';
import Header from './common/header/index'
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="app">
      {/* Provider可以直接连通store这个仓库 */}
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
