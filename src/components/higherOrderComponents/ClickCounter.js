import React, {Component} from 'react';
import withCounter from "./withCounter";

class ClickCounter extends Component {
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
    const {countHandler, count} = this.props;
    return (
      <button onClick={countHandler}>Click {count} times</button>
    )
  }
}

export default withCounter(ClickCounter, 2);