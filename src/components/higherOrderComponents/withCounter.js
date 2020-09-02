import React, {Component} from 'react';

const withCounter = (WrappedComponent, incrementBy) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {count: 0}
    }

    countHandler = () => {
      this.setState(prevState => {
        return {count: prevState.count + incrementBy}
      })
    };

    render() {
      return (
        <WrappedComponent count={this.state.count} countHandler={this.countHandler}/>
      )
    }
  }

  return WithCounter;
};

export default withCounter