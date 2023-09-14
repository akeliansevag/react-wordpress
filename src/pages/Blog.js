import React, {useEffect, useState} from 'react';
import {fetchHomeContent} from '../api/wordpress';
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=> {
      setLoading(true);
      fetchHomeContent().then(
        (data) => {
        setPosts(data);
        setLoading(false);
      }).catch(
        (error)=> {
          setError(error);
          setLoading(false);
      });
  },[]);

  const renderPosts = () => {
    return (
      <ul>
        {posts.map((post)=> (<li key={post.id}>{post.title.rendered}</li>))}
      </ul>
    )
  }

  return (
    <div className='container'>
      <h1>Blog</h1>
        {loading ?  (<p>Loading posts...</p>) : renderPosts() }
        
    </div>
    
  )
}

export default Blog;