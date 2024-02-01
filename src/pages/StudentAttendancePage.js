


import React, { useState, useEffect } from 'react';
import getAttendance from '../api/attendance';
import BasePage from '../components/BasePage';


const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <BasePage version='1.1'><div>Loading...</div></BasePage>;
  if (error) return <div>Error: {error}</div>;

  return (
    <BasePage version="1.1">
    <div>
      <h1>Posts</h1>
      {posts ? posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* ... other post details ... */}
        </div>
      )): <h1>No Available Posts</h1>}
    </div>
    </BasePage>
  );
}

export default PostsPage;
