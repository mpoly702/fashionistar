import { useState, useEffect } from 'react';
import { blogService } from '../services/blogService';

export const useBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await blogService.getPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (post) => {
    try {
      const newPost = await blogService.createPost(post);
      setPosts([...posts, newPost]);
      return newPost;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updatePost = async (id, post) => {
    try {
      const updatedPost = await blogService.updatePost(id, post);
      setPosts(posts.map(p => p.id === id ? updatedPost : p));
      return updatedPost;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deletePost = async (id) => {
    try {
      await blogService.deletePost(id);
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
  };
};