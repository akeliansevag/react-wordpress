import React, {useEffect, useState} from 'react';
import {fetchBlogPosts} from '../api/wordpress';
import { Link } from 'react-router-dom';
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
      setLoading(true);
      fetchBlogPosts().then(
        (data) => {
        setPosts(data);
        setLoading(false);
      }).catch(
        (error)=> {
          console.log(error);
          setLoading(false);
      });
  },[]);

  const renderPosts = () => {
    return (
      <ul>
        {posts.map((post)=> (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title.rendered}</Link>
          </li>
        ))}
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