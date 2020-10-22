import React, {useEffect, useState} from 'react';
import axios from "axios";
import './dataStyles.css';

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log(response);
      setPosts(response.data)
    }).catch(error => {
      console.log(error);
    })
  }, []);

  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idOnClick, setIdOnClick] = useState(1);

  const onClickHandler = () => {
    setIdOnClick(id)
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idOnClick}`).then(response => {
      console.log(response);
      setPost(response.data)
    }).catch(error => console.log(error))
  }, [idOnClick]);

  return (
    <div className='text'>
      {/*<ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>*/}
      <input type='text' value={id} onChange={e => setId(e.target.value)}/>
      <button type='button' onClick={onClickHandler}>Click</button>
      <ul><li>{post.title}</li></ul>
    </div>
  )
}

export default DataFetching;
