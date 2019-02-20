import React, { Component } from 'react';
import request from "../../api/fetch";
import './detail.scss'
import { withRouter } from 'react-router-dom';
import { changeTime } from '../../utils/getFormatTime';


class NewDetails extends Component {
  state = {
    detail:'',
    types: { share: '分享', ask: '问答', job: '招聘' },
    replies:[],
    replayStatus:false,
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    console.log(id);
    this.getDetails(id)
  }

  getDetails = (id) => {
    const data = {
      mdrender:true
    }
    request({ url: `/topic/${id}`, method: 'GET'}, data).then(res => {
      console.log(res)
      this.setState({
        detail:res.data,
        replies: res.data.replies.reverse()
      })
    })
  }
  goback = () => {
    this.props.history.go(-1);
  }
  changeReplyStatus = () => {
    this.setState({
      replayStatus:true,
    })
  }
  cancelReply =() => {
    this.setState({
      replayStatus: false,
    })
  }
  render() {
    const { detail, types, replies,replayStatus} = this.state;
    const content = { __html: detail.content }; 
    return (
      <div className="detail">
        <div className="body">
          <div className="news_title">
            <h1><span className="flag">{detail.top ? '置顶' : '精华'}</span>{detail.title}</h1>
            <div className="desc">
              <p> 发布于 {changeTime(detail.create_at)}  作者 {detail.author && detail.author.loginname} {detail.visit_count} 次浏览  来自 {types[detail.tab]}</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={content} className="md"></div>
          <div className="reply">
            <div className="other">
              <div className="collect"><i></i>收藏文章</div>
              <div className="reply_total">{detail.reply_count} 回复</div>
            </div>
            <div className="reply_input">
              <input type="text" placeholder="请输入回复内容"/>
              <button>回复</button>
            </div>
            {
              replies.map((item,index) => {
                return (
                  <div className="reply_item" key={index}>
                    <div className="reply_author">
                      <div className="reply_avatar">
                        <img src={item.author.avatar_url} alt="" />
                        <div className="reply_desc">
                          <span className="reply_name">{item.author.loginname}</span>
                          {replies.length - index}楼 • {changeTime(item.create_at)}
                          <span className="reply_at" onClick={this.changeReplyStatus}>回复</span>
                          <i className="icon_reply_at"></i>
                          <span className="ups_count">{item.ups.length}</span>
                        </div>
                      </div>
                    </div>
                    <div className="reply_content" dangerouslySetInnerHTML={{__html:item.content}}>
                    </div>
                    {
                      replayStatus ? (
                        <div className="reply_again">
                          <input type="text" placeholder={`@${item.author.loginname}`} />
                          <button>回复</button>
                          <button onClick={this.cancelReply}>取消</button>
                        </div>
                      ) : null
                    }
                  </div>
                )}
              )
            }
            

          </div>
        </div>
        <div className="back">
          <i className="iconfont icon-right icon-back" onClick={this.goback}></i>
        </div>
      </div>
    );
  }
}

export default withRouter(NewDetails);