import React, { Component } from 'react';
import NewsList from '../../components/newsList';
import classNames from 'classnames';
import './news.scss';

class News extends Component {
  constructor(props){
    super(props)
    this.itemTab= [
      { 'title': '全部', 'type': 'all' },
      { 'title': '精华', 'type': 'good' },
      { 'title': '分享', 'type': 'share' },
      { 'title': '问答', 'type': 'ask' },
      { 'title': '招聘', 'type': 'job' }
    ]
  }
  state = {
    tabColorStatus:false,
    tabIndex: 0,
    tab:'all'
  }
  changeTab = (index) => {
    console.log(index)
    this.setState({
      tabIndex:index,
      tab:this.itemTab[index].type
    })
  }
  render() {
    const {tab,tabIndex} = this.state;
    const tabClass = classNames({
      'topics-tab__item': true,
      'topics-tab--active': true
    });
    return <div className="news">
        <div className="topics-tab">
          <ul>
            {this.itemTab.map((item, index) => (
              <li
                key={index}
                className="topics-tab__item"
                className={
                  index === tabIndex
                    ? tabClass
                    : "topics-tab__item"
                }
                onClick={(e) => this.changeTab(index,e)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <NewsList tab={tab} />
      </div>;
  }
}

export default News;