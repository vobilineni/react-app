import React, {Component} from 'react';

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'srini'
    };
    console.log('LifeCycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB getDeriverStateFromProps');
    return null
  }

  componentDidMount() {
    console.log('LifeCycleB componentDidMount');
  }

  shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    console.log('LifeCycleB shouldComponentUpdate');
    return true
  }
  getSnapshotBeforeUpdate(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null {
    console.log('LifeCycleB getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    console.log('LifeCycleB componentDidUpdate');
  }
  render() {
    console.log('LifeCycleB render');
    return (
      <div>LifeCycle B</div>
    )
  }
}

export default LifeCycleB;
