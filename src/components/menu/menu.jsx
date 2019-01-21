import React, { Component } from "react";
import UserAvatar from "../../assets/images/user_img.jpg";
import "./menu.scss";
import classNames from 'classnames';
import { Link } from 'react-router-dom';
class AsideMenu extends Component {
  closeMenu = () => {
    this.props.setMenuShowStatus()
  }
  render() {
    const { isMenuShow } = this.props;
    const showClass = classNames({
      showMenu: isMenuShow,
      asideMenu:true
    })
    return <div className={showClass}>
        <div className="menu">
          <div className="user">
            <div className="user-avatar">
              <Link to="/login">
                <img src={UserAvatar} alt="头像" />
              </Link>
            </div>
            <div className="user-name">
              <span>点击头像登录</span>
            </div>
          </div>
          <div className="user-infos">
            <ul>
              <li className="user-infos__item">
                <Link to="/msg">
                  <i className="icon-msg" />
                  我的消息
                </Link>
              </li>
              <li className="user-infos__item">
                <Link to="/user">
                  <i className="icon-user" />
                  个人中心
                </Link>
              </li>
              <li className="user-infos__item">
                <Link to="/topic">
                  <i className="icon-topics" />
                  发布话题
                </Link>
              </li>
              <li className="user-infos__item">
                <i className="icon-about" />
                关于
              </li>
            </ul>
          </div>
        </div>
        <div className="mask" onClick={this.closeMenu} />
      </div>;
  }
}

export default AsideMenu;
