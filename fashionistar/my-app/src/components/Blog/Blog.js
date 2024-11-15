import { useState } from 'react';
import { useBlog } from '../../hooks/useBlog';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

const Blog = () => {
  const { posts, loading, error, createPost, updatePost, deletePost } = useBlog();
  const [editingPost, setEditingPost] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      if (editingPost) {
        await updatePost(editingPost.id, formData);
        setEditingPost(null);
      } else {
        await createPost(formData);
      }
    } catch (err) {
      console.error('Failed to save post:', err);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <BlogForm onSubmit={handleSubmit} initialData={editingPost} />
      <div className="mt-8">
        <BlogList
          posts={posts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Blog;