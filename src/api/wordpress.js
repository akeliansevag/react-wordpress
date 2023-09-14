//const WORDPRESS_API_URL = 'https://api.sevagakelian.com/wp-json/wp/v2';
const WORDPRESS_API_URL = 'http://127.0.0.1/api/wp-json/wp/v2';

// Function to fetch a list of blog posts from WordPress
export async function fetchBlogPosts() {
  try{
    const response = await fetch(`${WORDPRESS_API_URL}/posts`);
    if(!response.ok){
        throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  }catch(error){
      throw error;
  }
}

export async function fetchPost(slug){
  try{
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}`)
    if(!response.ok){
      throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    return data;
  }catch(error){
    throw error;
  }
}

export async function fetchPage(slug){
  try{
    const response = await fetch(`${WORDPRESS_API_URL}/pages?slug=${slug}&acf_format=standard`);
    if(!response.ok){
      throw new Error('Cannot fetch page');
    }
    const data = await response.json();
    return data;
  }catch(error){
    throw error;
  }
}
