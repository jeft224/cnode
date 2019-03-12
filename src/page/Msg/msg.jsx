import React, { Component } from 'react';
// import { changeTime } from '../../utils/getFormatTime';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import request from '../../api/fetch';
import './msg.scss';

class Message extends Component {
  state = {
    tabStatus: true,
    has_read_messages: [],
    hasnot_read_messages: []
  };

  componentDidMount() {
    this.getMsg();
  }
  goback = () => {
    const { history } = this.props;
    history.go(-1);
  };

  changeTab = (status) => {
    this.setState({
      tabStatus: status
    });
  };

  getMsg = () => {
    const { accesstoken } = localStorage;
    request({ url: '/messages', method: 'GET' }, { accesstoken }).then((res) => {
      console.log(res);
      this.setState({
        has_read_messages: res.data.has_read_messages,
        hasnot_read_messages: res.data.hasnot_read_messages
      });
    });
  };

  render() {
    const { tabStatus, has_read_messages, hasnot_read_messages } = this.state;
    const readClass = classNames({
      selected: true,
      msg_read: true
    });
    const noReadClass = classNames({
      selected: true,
      msg_no_read: true
    });
    return (
      <div className="msg">
        <div className="msg_header">
          <i className="iconfont icon-right" onClick={this.goback} />
          <h2>消息中心</h2>
        </div>
        <div className="msg_tab">
          <div
            className={tabStatus ? readClass : 'msg_read'}
            onClick={e => this.changeTab(e, true)}>
            已读消息：
            {has_read_messages.length}
          </div>
          <div
            className={!tabStatus ? noReadClass : 'msg_no_read'}
            onClick={e => this.changeTab(e, false)}>
            未读消息：
            {hasnot_read_messages.length}
          </div>
        </div>
        <div className="msg_list">
          {tabStatus
            ? has_read_messages.map(item => (
              <div className="msg-item">
                <div className="msg_body">
                  <div className="msg_name">
                    <span>{item.author.loginname}</span>
                      的回复：
                  </div>
                  <div
                    className="msg_content"
                    dangerouslySetInnerHTML={{ __html: item.reply.content }} />
                  <div className="">
                    <div className="msg_form">{item.topic.title}</div>
                  </div>
                </div>
              </div>
              ))
            : hasnot_read_messages.map(item => (
              <div className="msg-item">
                <div className="msg_body">
                  <div className="msg_name">
                    <span>{}</span>
                      的回复：
                  </div>
                  <div
                    className="msg_content"
                    dangerouslySetInnerHTML={{ __html: item.reply.content }} />
                  <div className="">
                    <div className="msg_form">{item.topic.title}</div>
                  </div>
                </div>
              </div>
              ))}
        </div>
      </div>
    );
  }
}
export default withRouter(Message);
