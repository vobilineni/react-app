import React, {Component} from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: ''
    }
  }

  componentDidMount(): void {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({posts: response.data});
      console.log(response)
    }).catch(error => {
      this.setState({errorMsg: 'Error getting data'});
      console.log(error)
    })
  }

  render() {
    const {posts, errorMsg} = this.state;

    return (
      <div>
        {
          posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : errorMsg
        }
      </div>
    )
  }
}

export default PostList;
