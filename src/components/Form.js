import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', comments: '', topic: 'Angular'}
  }

  handleUserNameChange = (event) => {
    this.setState({userName: event.target.value})
  };
  handleCommentsChange = (event) => {
    this.setState({comments: event.target.value})
  };
  handleTopicChange = (event) => {
    this.setState({topic: event.target.value})
  };
  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault()
  };

  render() {
    const {userName, comments, topic} = this.state;
    return (<form onSubmit={this.handleSubmit}>
      <div>< label>Name:</label><input type='text' value={userName} onChange={this.handleUserNameChange}/></div>
      <div><label>Comments</label><textarea value={comments} onChange={this.handleCommentsChange}/></div>
      <div><label>Topic</label>
        <select value={topic} onChange={this.handleTopicChange}>
        <option>React</option>
        <option>Angular</option>
        <option>Vue</option>
        <option>JS</option>
      </select></div>
      <button type="submit">Submit</button>
    </form>)
  }
}

export default Form;
