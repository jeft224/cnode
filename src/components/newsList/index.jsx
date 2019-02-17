import React, { Component } from 'react';
import './newslist.scss';
import NewsItem from '../newsitem';
import Loading from '../loading';
import PropTypes from "prop-types";
import request from '../../api/fetch';
class NewsList extends Component {
  constructor(props) {
    super(props);
    this.limit = 10;
    this.mdrender = true;
    this.scrollWrapper = React.createRef();
  }
  state = {
    page: 1,
    newsList: [],
    loading: false,
    isOver: false // 是否全部加载
  };
  // getDerivedStateFromProps
  // componentWillReceiveProps(nextProps) {
  //   const { tab } = nextProps;
  //   if (this.props.tab !== nextProps.tab) {
  //     this.getTopics(tab);
  //   }
  // }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.tab !== prevProps.tab) {
      this.setState({
        newsList:[],
        page:1
      },()=> {
        this.getTopics(this.props.tab);
      })
      // console.log(this.state.page)
      
    }
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   return nextProps.tab === this.props.tab ? false : true
  // }
  getTopics = async (tab) => {
    const data = {
      tab,
      page: this.state.page,
      limit: this.limit,
      mdrender: this.mdrender
    };
    this.setState({
      loading: true
    });
    await request(
      {
        url: "/topics",
        method: "GET"
      },
      data
    ).then(res => {
      // console.log(res.data)
      this.setState(preState => ({
        newsList: preState.newsList.concat(res.data),
        loading: false
      }));
      // this.setState({ newsList: res.data, loading: false });
      // console.log(res);
    });
  };
  componentDidMount() {
    const that = this;
    const { tab } = this.props;
    this.getTopics(tab);
    this.scrollWrapper.current.addEventListener(
      "scroll",
      (e) => {
        const {tab} = that.props;
        const flag = e.target.clientHeight + e.target.scrollTop ===
          e.target.scrollHeight;
        if (flag){
          this.setState({
            page: this.state.page + 1
          });
          this.getTopics(tab);
        }
      },
      false
    );
  }

  loadMoreFn = () => {};
  scrolledNews = e => {};
  componentWillUnmount() {
    this.scrollWrapper.current.removeEventListener("scroll", () => {}, false);
  }
  render() {
    const { newsList, loading } = this.state;
    return (
      <div className="newslist" ref={this.scrollWrapper}>
        {loading ? (
          <Loading />
        ) : (
          <div className="newsA">
            {newsList.map(item => (
              <NewsItem news={item} key={item.id} />
            ))}
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