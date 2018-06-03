
import React, { Component } from 'react';

import Axjx from '../axjx';
class InTheLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.7

    };
  }
  here() {
    this.setState({
      opacity: 1.0
    }
    );
  }
  out() {
    this.setState(
      {
        opacity: 0.7
      }
    );
  }

  render() {
    const styleObj = {
      opacity: this.state.opacity,
    };
    return (

      // {/* <Link to={{ pathname: `/${this.props.fig}` }}> */}
      <div className="InTheLabel"
        style={styleObj}
        onMouseEnter={this.here.bind(this)}
        onMouseLeave={this.out.bind(this)}
      >

        <img className="labelImg" src={require(`../../js/img/demoimg/${this.props.fig}.gif`)} />
        <div className="labelName" >{this.props.fig}</div>
      </div>
      // {/* </Link> */}


    );
  }
}
export default InTheLabel;