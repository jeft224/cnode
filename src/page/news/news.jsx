/* eslint-disable */
import React, { Component } from "react";
import classNames from "classnames";
import NewsList from "../../components/newslist";
import "./news.scss";

class News extends Component {
  constructor(props) {
    super(props);
    this.itemTab = [
      { title: "全部", type: "all" },
      { title: "精华", type: "good" },
      { title: "分享", type: "share" },
      { title: "问答", type: "ask" },
      { title: "招聘", type: "job" },
    ];
  }
  state = {
    tabIndex: 0,
    tab: "all",
  };
  changeTab = (index) => {
    console.log(this.itemTab[index].type);
    this.setState({
      tabIndex: index,
      tab: this.itemTab[index].type,
    });
    console.log(index);
  };
  render() {
    const { tab, tabIndex } = this.state;
    const tabClass = classNames({
      "topics-tab__item": true,
      "topics-tab--active": true,
    });
    return (
      <div className="news">
        <div className="topics-tab">
          <ul>
            {this.itemTab.map((item, index) => (
              <li
                key={item.title}
                className="topics-tab__item"
                className={index === tabIndex ? tabClass : "topics-tab__item"}
                onClick={(e) => { this.changeTab(index, e); }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <NewsList tab={tab} />
      </div>
    );
  }
}

export default News;
