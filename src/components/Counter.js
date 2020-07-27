import React, {Component} from 'react'

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment() {
    // regular object as argument
    // this.setState({count: this.state.count + 1},
    //   () => {
    //     console.log('from call back', this.state.count)
    //   });
    // console.log(this.state.count);

    // passing function as an argument
    this.setState((prevState, props) => ({
      count: prevState.count + props.index
    }), () => {
      console.log('from callback', this.state.count)
    });
    console.log(this.state.count)
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>counter - {this.state.count}</h1>
        <button onClick={() => {
          this.incrementFive()
        }}>Increment
        </button>
      </div>
    )
  }
}

export default Counter
