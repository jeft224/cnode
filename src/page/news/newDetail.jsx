import React, { Component } from 'react';
import request from "../../api/fetch";
import './detail.scss'

class NewDetails extends Component {
  state = {
    detail:'',
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    console.log(id);
    this.getDetails(id)
  }

  getDetails = (id) => {
    request({url:`/topic/${id}`,method:'GET'}).then(res => {
      console.log(res)
      this.setState({
        detail:res.data
      })
    })
  }
  
  render() {
    const {detail} = this.state;
    const content = { __html: detail.content };
    return (
      <div className="detail">
        <div className="body">
          <div dangerouslySetInnerHTML={content} className="md"></div>
        </div>
      </div>
    );
  }
}

export default NewDetails;