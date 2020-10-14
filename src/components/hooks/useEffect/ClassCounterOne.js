import React, {Component} from 'react';

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevState.count !== this.state.count) {
      console.log('updated title');
      document.title = `Clicked ${this.state.count} times`
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterOne;