import React, {useState,useEffect} from 'react';
import { fetchPage } from '../api/wordpress';
const About = () => {
  const [page, setPage] = useState([]);
  
  useEffect(()=>{
    fetchPage('about-us').then((res) => setPage(res)).catch((error)=> console.log(error));
    
  },[]);
  
  if(page.length > 0){
    console.log(page);
  
    return (
      <div className='container'>
        <h1>{page[0].title.rendered}</h1>
        <img alt='About us' src={page[0].acf.about_us_image.sizes.medium} />
        <div className='mt-4' dangerouslySetInnerHTML={{ __html: page[0].acf.about_us_description }} />
      </div>
    )
  }else{
    return (
      <></>
    )
  }
}

export default About;