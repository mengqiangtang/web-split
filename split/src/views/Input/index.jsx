import React, { Component } from 'react';
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        username: '',
        phone: '',
        password: '',
      },
      resume: {
        base: {
          name: '',
          age: '',
        },
        job: {
          year: '',
          des: '',
        },
      },
    }
  }

  setVal(e) {
    // this.setState({
    //   login: {
    //     [username]: '',
    //   }
    // })
    let { name, value } = e.target;
    let { login } = this.state;
    login[name] = value;
    this.setState({ login })
  }
  _setVal(e) {
    // 获取自定义属性
    let namekey = e.target.dataset.namekey;

    let { name, value } = e.target;

    let { resume } = this.state;
    resume[namekey][name] = value;
    this.setState({ resume })
  }

  render() {
    let { login, resume } = this.state;
    return (
      // 当有两个同级的标签，且不想在外层包一个父级时使用
      <React.Fragment>
        <h3>input 表单</h3>
        <ul>
          <li>
            <label>用户名：{login.username}</label>
            <div className="label_ctrl">
              <input type="text" name="username" value={login.username} onChange={(e) => { this.setVal(e) }} autoComplete="new-password" />
            </div>
          </li>
          <li>
            <label>手机号：{login.phone}</label>
            <div className="label_ctrl">
              <input type="text" name="phone" value={login.phone} onChange={(e) => { this.setVal(e) }} autoComplete="new-password" />
            </div>
          </li>
          <li>
            <label>密<em style={{ visibility: 'hidden' }}>一</em>码：{login.password}</label>
            <div className="label_ctrl">
              <input type="password" name="password" value={login.password} onChange={(e) => { this.setVal(e) }} autoComplete="new-password" />
            </div>
            {/* 不提示历史密码 autoComplete="new-password" */}
          </li>
        </ul>
        <h3>简历信息</h3>
        <ul>
          <li>
            <label>姓名：{resume.base.name}</label>
            <div className="label_ctrl">
              <input type="text" name="name" data-namekey="base" value={resume.base.name} onChange={(e) => { this._setVal(e) }} />
            </div>
          </li>
          <li>
            <label>工作年限：{resume.job.year}</label>
            <div className="label_ctrl">
              <input type="text" name="year" data-namekey="job" value={resume.job.year} onChange={(e) => { this._setVal(e) }} />
            </div>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
export default View;