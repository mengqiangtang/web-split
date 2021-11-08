// Suspense访问页面在加载是不会是空白 有加载图标
import React, { Component, Suspense, lazy } from 'react';

import { withRouter, NavLink, Switch, Redirect, Route } from 'react-router-dom';


// import Input from './views/Input';
// import Home from './views/Home';
// import Web from './views/Web';

// 懒加载引入组件的方式，要放在import下面
const Home = lazy(() => import('./views/Home'));
const Input = lazy(() => import('./views/Input'));
const Web = lazy(() => import('./views/Web'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/input" component={3   } />
          {/* 动态路由 */}
          <Route exact path="/web" component={Web} />
          <Route exact path={`/web/:cls`} component={Web} />
          <Route path={`/web/:cls/:uid`} component={Web} />

          {/* 访问的页面不存在跳到首页/，用来定义404 */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    )
  }
}
export default App;