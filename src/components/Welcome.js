// class component
import React, {Component} from 'react';

class Welcome extends Component {
  /*render() {
    return (
      <div>
        <h3>hello {this.props.greet} {this.props.name} </h3>
        {this.props.children}
      </div>
    )
  }*/
    // destructuring props
  render() {
    const {greet, name, children} = this.props;
    // const {state1, state2, state3} = this.state;
    return (
      <div>
        <h3>hello {greet} {name} </h3>
        {children}
      </div>
    )
  }

}

export default Welcome;
