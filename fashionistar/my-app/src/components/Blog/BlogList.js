import BlogPost from './BlogPost';

const BlogList = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <BlogPost
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BlogList;