import React, {Component} from 'react';

class ClickCount extends Component {

  /*constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  clickHandler = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1};
    })
  };*/

  render() {
    // return (<button onClick={this.clickHandler}>Click {this.state.count} times</button>)
    const {countHandler, count} = this.props;
    return (
      <button onClick={countHandler}>Click {count} times</button>
    )

  }

}

export default ClickCount;
