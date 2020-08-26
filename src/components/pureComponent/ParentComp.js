import React, {Component} from 'react';
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'srini'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'srini'
      })
    }, 2000)
  }

  render() {
    console.log('Parent Component');
    return (
      <div>
        <div>Parent Component</div>
        {/*<RegComp name={this.state.name} />*/}
        {/*<PureComp name={this.state.name} />*/}
        <MemoComp />
      </div>
    )
  }
}

export default ParentComp;
