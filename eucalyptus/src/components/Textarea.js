import React, { Component } from "react";
import axios from "axios";

class Textarea extends Component {
  state = {
    code : "",
    info : ""
  };
  params  = this.props.match
  handleChange = (event) => {
    this.setState({ code: event.target.value.substr(0) });
  };
  submit= async(e)=> {
    e.preventDefault() 
    console.log(this.props.match)
    const {data: {info}} = axios({
      method : 'post',
      url : 'http://211.33.49.253:8080/spring/submitcode',
      data : {
        //'Pnum' : this.params.params.id,
        'Pnum' : 1001,
          'code' : this.state.code
      }
    })
    this.setState({value:''})
    this.getPosts()
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <form>
          <h1>문제번호</h1>
          <textarea
            placeholder="Input your code"
            rows="50"
            cols="75"
            value={this.state.code}
            onChange={this.handleChange}
          />
        <button onClick={this.submit}>submit</button>
        </form>
      </div>
    );
  }
}

export default Textarea;