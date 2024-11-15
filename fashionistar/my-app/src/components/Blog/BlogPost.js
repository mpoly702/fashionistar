const BlogPost = ({ post, onEdit, onDelete }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(post)}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default BlogPost;