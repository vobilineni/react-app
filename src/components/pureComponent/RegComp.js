import React, {Component} from 'react';

class RegComp extends Component{
  render(){
    console.log('Reg Component');
    return(
      <div>Reg Component {this.props.name}</div>
    )
  }

}
export default RegComp;
