import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
class View extends Component{
  toUrl() {
    setTimeout(() => {
      console.log(this.props)
      // js跳转
      // this.props.history.push('/');
    },3000)
  }
  componentDidMount() {
    this.toUrl()
  }
  render() {
    return (
      <div>详情{this.props.uid}</div>
    )
  }
}
// withRouter让隔代的页面获取路由信息 ，不然无法获取
export default withRouter(View);