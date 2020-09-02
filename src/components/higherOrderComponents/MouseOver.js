import React, {Component} from 'react';
import withCounter from "./withCounter";

class MouseOver extends Component {
  /* constructor(props){
     super(props);
     this.state = {
       count: 0
     }
   }

   countHandler =() =>{
     this.setState( prevState => {
       return {count: prevState.count + 1}
     })
   };*/
  render() {
    const {count, countHandler} = this.props;
    return (
      <button onMouseOver={countHandler}>MouseOver {count} times</button>
    )
  }
}

export default withCounter(MouseOver, 1);