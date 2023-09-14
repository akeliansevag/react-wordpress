const WORDPRESS_API_URL = 'https://api.sevagakelian.com/wp-json/wp/v2';

export async function fetchHomeContent(){
    try{
        const response = await fetch(`${WORDPRESS_API_URL}/posts`);
        if(!response.ok){
            throw new Error('Failed to fetch home content');
        }
        const data = await response.json();
        return data;
    }catch(error){
        throw error;
    }
}

// Function to fetch a list of blog posts from WordPress
export async function fetchBlogPosts() {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}
