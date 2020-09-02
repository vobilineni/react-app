import React, {Component} from 'react';

class MouseCount extends Component {
/*  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  countHandler = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  };*/

  render() {
    // return (<h1 onMouseOver={this.countHandler}>Hover {this.state.count} times</h1>)
    const {count, countHandler} = this.props;
    return (<h1 onMouseOver={countHandler}>Hover {count} times</h1>)
  }
}

export default MouseCount;
