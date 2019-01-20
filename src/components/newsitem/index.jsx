import React, { Component } from 'react';
import './newsitem.scss'
import classNames from 'classnames';
import moment from 'moment'
class NewsItem extends Component {
  constructor(props){
    super(props);
    this.tabObj = { share: "分享", good: "精华", job:"招聘",ask:"问答" };
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  componentDidMount(){
    // console.log(this.props.news)
  }
  changeTime = (time) => {
    return moment(time).startOf('minute').fromNow()
    .replace(/hours?/, '小时')
    .replace('ago', '前')
    .replace(/days?/, '天')
    .replace(/minutes?/, '分钟')
    .replace(/\ban?/, '1')
    .replace(/months?/, '个月')
    .replace(/\byears?/, '年')
    .replace(/\s/g, '')
    .replace('fewseconds', '分钟');
  }
  render() {
    const {news} = this.props;
    const topClass = classNames({
      flag:true,
      top:(news.top || news.good)
    })
     return <div className="news-item">
         <div className="user-avatar">
           <img src={news.author.avatar_url} alt="头像" />
         </div>
         <div className="topic_title_wrapper">
           <p className="topic_title_name">
           <span className={topClass}>{(news.top ? "置顶" : "") || (news.good ? "精华":"")|| this.tabObj[news.tab]}</span>
             {news.title}
           </p>
           <p className="topic_title_view">
             <span className="viewed">{news.reply_count}</span>/{news.visit_count}
           <span className="date">{this.changeTime(news.create_at)}</span>
           </p>
         </div>
       </div>;
  }
}

export default NewsItem;