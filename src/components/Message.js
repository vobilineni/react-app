import React, {Component} from 'react';

class Message extends Component {

  index = 1;
  constructor(){
    super();
    this.state = {
      message: 'Welcome Visitors'
    }
  }
  changeMessage(i){
    this.setState({
      message: 'Thank you for subscribing' + i
    });
    this.index++
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeMessage(this.index)}>Subscribe</button>
      </div>
    )
  }
}

export default Message;
