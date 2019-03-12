import React, { Component } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import changeTime from '../../utils/getFormatTime';
import './newsitem.scss';


class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.tabObj = {
      share: '分享',
      good: '精华',
      job: '招聘',
      ask: '问答'
    };
  }
  static propTypes ={
    news: PropTypes.object
  }
  // componentWillReceiveProps(nextProps){
  //   // console.log(nextProps)
  // }
  componentDidMount() {
    // console.log(this.props.news)
  }
  render() {
    const { news } = this.props;
    const topClass = classNames({
      flag: true,
      top: news.top || news.good
    });
    return (
      <div
        className="news-item"
        onClick={() => this.props.history.push(`/detail/${news.id}`)}>
        <div className="user-avatar">
          <img src={news.author.avatar_url} alt="头像" />
        </div>
        <div className="topic_title_wrapper">
          <p className="topic_title_name">
            <span className={topClass}>
              {(news.top ? '置顶' : '') 
              || (news.good ? '精华' : '') 
              || this.tabObj[news.tab]}
            </span>
            {news.title}
          </p>
          <p className="topic_title_view">
            <span className="viewed">{news.reply_count}</span>
            /
            {news.visit_count}
            <span className="date">{changeTime(news.create_at)}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default withRouter(NewsItem);
