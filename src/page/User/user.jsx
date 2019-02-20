import React, { Component } from "react";
import "./user.scss";
import request from "../../api/fetch";
import { changeTime } from '../../utils/getFormatTime';
import { withRouter } from 'react-router-dom';

class User extends Component {
  state = {
    user: {},
    collectTopics:[]
  };
  goback = () => {
    this.props.history.go(-1);
  };
  getTopics = () => {
    const { loginname } = localStorage.user && JSON.parse(localStorage.user);
    request({ url: `/topic_collect/${loginname}`}).then(res => {
      this.setState({
        collectTopics:res.data
      })
    })
  }
  getUserInfo = () => {
    const { loginname } = localStorage.user && JSON.parse(localStorage.user);
    request({ url: `/user/${loginname}`, method: "GET" }).then(res => {
      console.log(res);
      this.setState({
        user: res.data
      });
    });
  };
  componentDidMount() {
    if (!localStorage.user) {
      this.props.history.push("/login");
    }
    this.getUserInfo();
    this.getTopics();
  }
  render() {
    const { user, collectTopics} = this.state;
    return (
      <div className="user">
        <div className="user_header">
          <i className="iconfont icon-right" onClick={this.goback} />
          <h2>个人中心</h2>
        </div>
        <div className="info_content">
          <div className="info_register">
            <div className="info_img">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="info_name">{user.loginname}</div>
            <div className="info_score">积分：{user.score}</div>
            <div className="info_score">Github：<a href={`https://github.com/${user.githubUsername}`}>{user.githubUsername}</a></div>
            <div className="info_date">
              注册于：{changeTime(user.create_at)}
            </div>
          </div>
          <div className="info_collect">
            <div className="collect_title">
              收藏的话题
            </div>
            <div className="collect_content">
              {
                collectTopics.map((item,index)=> (
                  <div className="collect_item" key ={index}>
                    <div className="collect_news_img">
                      <img src={item.author.avatar_url} alt="" />
                    </div>
                    <div className="collect_news_title">
                      <span>{ item.title }</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="info_collect">
            <div className="collect_title">
              最近回复过的话题
            </div>
            <div className="collect_content">
              {
                user.recent_replies && user.recent_replies.map((item, index) => (
                  <div className="collect_item" key={index}>
                    <div className="collect_news_img">
                      <img src={item.author.avatar_url} alt="" />
                    </div>
                    <div className="collect_news_title">
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))
            }
            </div>
          </div>
          <div className="info_collect">
            <div className="collect_title">
              最近创建的话题
            </div>
            <div className="collect_content">
              {
                user.recent_topics && user.recent_topics.map((item, index) => (
                  <div className="collect_item" key={index}>
                    <div className="collect_news_img">
                      <img src={item.author.avatar_url} alt="" />
                    </div>
                    <div className="collect_news_title">
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
