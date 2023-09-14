import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../api/wordpress';

const BlogSingle = () => {
  const {slug} = useParams();
  const [post, setPost] = useState([]);
  const [loading,setLoading] = useState(false);
 
  useEffect(()=> {
    setLoading(true);
    fetchPost(slug).then((data) => {
        setLoading(false);
        setPost(data);
    }).catch((error) => {
        setLoading(false);
        console.log(error);
    });
  }, []);
  const renderPostContent = () => {
    let content = "";
    if(post.length > 0){
        content = (
            <>
                <h1>{post[0].title.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: post[0].content?.rendered }} />
            </>
        );
    }else{
        content = <p>There is no post</p>;
    }
    return content;
  }
  return (
    <div className='container'>
        {loading ? <p>loading...</p> : renderPostContent()}
    </div>
  )
}

export default BlogSingle;