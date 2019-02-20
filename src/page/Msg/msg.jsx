import React, { Component } from 'react';
import "./msg.scss";
import request from "../../api/fetch";
import { changeTime } from '../../utils/getFormatTime';
import { withRouter } from 'react-router-dom';
class Message extends Component {
  goback = () => {
    this.props.history.go(-1);
  };
  render() {
    return (
      <div className="msg">
        <div className="msg_header">
          <i className="iconfont icon-right" onClick={this.goback} />
          <h2>消息中心</h2>
        </div>
      </div>
    )
  }
}

export default withRouter(Message);