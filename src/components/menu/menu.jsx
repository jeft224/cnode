import React, { Component } from 'react';
import UserAvatar from '../../assets/images/user_img.jpg';
import './menu.scss';
class AsideMenu extends Component {
  render() {
    return (
      <div className="asideMenu">
        <div className="menu">
          <div className="user">
            <div className="user-avatar">
              <img src={UserAvatar} alt="头像" />
            </div>
            <div className="user-name">
              <span>点击头像登录</span>
            </div>
          </div>
          <div className="user-infos">
            <ul>
              <li>我的消息</li>
              <li>发布话题</li>
              <li>个人中心</li>
              <li>关于</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AsideMenu;