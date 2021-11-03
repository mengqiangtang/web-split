import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import List from './List.jsx'
import Detail from './Detail.jsx'
class View extends Component{
  ifPage(params) {
    console.log(params.uid)
    if (params.uid) {
      // // 详情
      // return (
      //   <div>这是详情页面</div>
      // )
      return (<Detail uid={params.uid} />)
    } else {
      // // 列表
      // return (
      //   <div>这是列表页面</div>
      // )
      return (<List/>)
    }
  }

  // toUrl() {
  //   // setTimeout(() => {
  //   //   // js跳转
  //   //   // this.props.history.push('/');
  //   // },3000)
  // }
  // componentDidMount() {
  //   this.toUrl()
  // }

  render() {
    console.log(this.props)
    let { match } = this.props;

    return (
      <React.Fragment>
        <h3>web2008a</h3>
        <header>组件</header>
        <div className="main">
          <div className="left">组件</div>
          <div className="right">
            {this.ifPage(match.params)}
          </div>
        </div>
        <footer>组件</footer>
       
      </React.Fragment>
    )
  }
}
export default withRouter(View);