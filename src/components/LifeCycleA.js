import React, {Component} from 'react';
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'srini'
    };
    console.log('LifeCycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDerivedStateFromProps');
    return null
  }

  componentDidMount() {
    console.log('LifeCycleA componentDidMount');
  }

  shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    console.log('LifeCycleA shouldComponentUpdate');
    return true
  }
  getSnapshotBeforeUpdate(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null {
    console.log('LifeCycleA getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    console.log('LifeCycleA componentDidUpdate');
  }

  clickHandler = () =>{
    this.setState({
      name: 'srinivas'
    })
  };

  render() {
    console.log('LifeCycleA render');
    return (<div>
      <div>LifeCycle A</div>
      <LifeCycleB />
      <button onClick={this.clickHandler}>change state</button>
      </div>
    )
  }
}

export default LifeCycleA;
