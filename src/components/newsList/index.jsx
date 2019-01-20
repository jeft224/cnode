import React, { Component } from 'react';
import './newslist.scss';
import NewsItem from '../newsitem';
import PropTypes from "prop-types";
import request from '../../api/fetch';
class NewsList extends Component {
  constructor(props) {
    super(props);
    this.limit = 8;
    this.mdrender = true;
  }
  state = {
    page: 0,
    newsList:[]
  };
  componentWillReceiveProps(nextProps){
    const { tab } = nextProps;
    if(this.props.tab !== nextProps.tab){
      this.getTopics(tab);
    }
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextProps.tab === this.props.tab ? false : true
  // }
  getTopics = (tab) => {
    let that = this;
    const data = { tab, page: this.state.page, limit: this.limit, mdrender: this.mdrender };
    request({
      url: "/topics",
      method: "GET",
    }, data).then(res => {
      that.setState({ newsList: res.data });
      // console.log(res);
    });
  }
  componentDidMount() {
    // console.log(111)
    const { tab } = this.props;
    this.getTopics(tab);
  }
  render() {
    const {newsList} = this.state
    return (
      <div className="newslist">
      {
        newsList.map((item) => (
           <NewsItem news={item} key={item.id}/>
        ))
      }
      </div>
    )
  }
}
NewsList.propTypes ={
  tab:PropTypes.string
}
export default NewsList;