import React, {Component} from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  hello: boolean;
  clickHandler() {
    this.hello = !this.hello;
    this.setState({
      message: this.hello ? 'Good bye' : 'hello'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>click</button>*/}
        {/*<button onClick={() => this.clickHandler()}>click</button>*/}
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default EventBind;
