import React, {Component} from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      title: '',
      body: '',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })

  };

  render() {
    const {userName, title, body} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>UserName: <input type="text" value={userName} name="userName" onChange={this.changeHandler}/></div>
          <div>Title: <input type="text" value={title} name="title" onChange={this.changeHandler}/></div>
          <div>Body: <input type="text" value={body} name="body" onChange={this.changeHandler}/></div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
