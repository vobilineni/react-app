import React, {Component} from 'react';

class UserGreeting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    // Short circuit operator
    return this.state.isLoggedIn && <div>Welcome srini</div>

    // Ternary conditional operator
    /*return (
      this.state.isLoggedIn ? <div>Welcome srini</div> : <div>Welcome Guest</div>
    )*/

    // Element variables
    /*let message;
    if (this.state.isLoggedIn) {message = <div>Welcome srini</div>}
    else {message = <div>Welcome Guest</div>}
    return <div>{message}</div>*/

    // if/else approach
    /*if (this.state.isLoggedIn) {return <div>Welcome srini</div>}
    else {return <div>Welcome Guest</div>}*/

    /*return (
      <div>
        <div>Welcome srini</div>
        <div>Welcome Guest</div>
      </div>
    )*/
  }

}

export default UserGreeting;