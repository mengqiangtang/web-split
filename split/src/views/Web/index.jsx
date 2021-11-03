import React, { Component } from 'react';

import W1908 from './W1908/';
import W2008 from './W2008/';

class View extends Component {

  ifPage(params) {
    switch (params.cls) {
      case '1908':
        return <W1908 />
      case '2008':
        return <W2008 />
      case '2010':
        return <div>2010</div>
      default:
        return <div>工作室</div>
    }
  }

  render() {
    let { match } = this.props;
    return (
      <div>
        web架构
        {this.ifPage(match.params)}
      </div>
    )
  }
}
export default View;