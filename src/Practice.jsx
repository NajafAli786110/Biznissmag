import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://biznismag.com/wp-json/wp/v2/posts')
      .then(response => {
        // Extract and set the relevant data (thumbnail, title, excerpt)
        const extractedData = response.data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          thumbnail: post.featured_media ? post.featured_media.media_details.sizes.medium.source_url : null,
        }));
        setPosts(extractedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.thumbnail && (
              <img src={post.thumbnail} alt="Post Thumbnail" />
            )}
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
