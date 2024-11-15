// HeroSection.js
//import React from 'react';
//import Card from './Card';

//const Blog = () => {

  // const cardData = {
    /*thumbnail: '(link unavailable)',
    title: 'Blog Title',
    author: 'John Doe',
    datePublished: '2024-09-09',
    likes: 123,
    comments: 45,
  };

  return (
    <div className="flex justify-center p-10 w-full md:w-[70%] rounded-lg">
      <Card {...cardData} />
    </div>
);
};

export default Blog; */
import React, { useState, useEffect } from 'react';
import { blogService } from '../services/blogService';
import Card from './Card';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await blogService.getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 class="text-4xl font-extrabold mb-6 text-gray-900">Blog Posts</h1>
      <div className="flex justify-center p-10 w-full md:w-[70%] rounded-lg">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
