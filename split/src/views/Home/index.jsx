// src/views/Home/index.jsx
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// React.Component ========  Component
class View extends Component {
  render() {
    return (
      // 不能并列  要有一个标签包裹
      <div>
        这是首页<br/>
        <NavLink exact to='/'>首页</NavLink><br />
        <NavLink to='/input'>input页</NavLink><br />
      </div>
    )
  }
}
export default View;