const API_URL = "http://localhost:5000";

export const blogService = {
  getPosts: async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },
  // Add other API methods here
  createPost: async (postData) => {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  },
  updatePost: async (postId, postData) => {
    try {
      const response = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  },
  deletePost: async (postId) => {
    try {
      const response = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
    }
  },
};
