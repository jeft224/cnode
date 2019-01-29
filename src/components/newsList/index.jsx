import React, { Component } from 'react';
import './newslist.scss';
import NewsItem from '../newsitem';
import Loading from '../loading';
import PropTypes from "prop-types";
import request from '../../api/fetch';
class NewsList extends Component {
  constructor(props) {
    super(props);
    this.limit = 15;
    this.mdrender = true;
  }
  state = {
    page: 1,
    newsList: [],
    loading: false,
    isOver:false // 是否全部加载
  };
  componentWillReceiveProps(nextProps) {
    const { tab } = nextProps;
    if (this.props.tab !== nextProps.tab) {
      this.getTopics(tab);
    }
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextProps.tab === this.props.tab ? false : true
  // }
  getTopics = tab => {
    let that = this;
    const data = {
      tab,
      page: this.state.page,
      limit: this.limit,
      mdrender: this.mdrender
    };
    this.setState({
      loading: true
    });
    request(
      {
        url: "/topics",
        method: "GET"
      },
      data
    ).then(res => {
      that.setState({ newsList: res.data, loading: false });
      // console.log(res);
    });
  };
  componentDidMount() {
    const { tab } = this.props;
    this.getTopics(tab);
    this.refs.scrollWrapper.addEventListener("scroll", () => {
      console.log(1111)
      this.setState({
        page: this.state.page + 1
      })
      this.getTopics(tab);
    }, false)
  };

  loadMoreFn = () => {

  }
  scrolledNews = (e) => {
    
  }
  componentWillUnmount() {
    this.refs.scrollWrapper.addEventListener("scroll",() => {

    },false)
  }
  render() {
    const { newsList, loading } = this.state;
    return (
      <div className="newslist" ref="scrollWrapper">
        {loading ? (
          <Loading />
        ) : ( <div className ="newsA">
            { newsList.map(item => <NewsItem news={item} key={item.id} />)}
        </div>
        )}
      </div>
    );
  }
}
NewsList.propTypes ={
  tab:PropTypes.string
}
export default NewsList;