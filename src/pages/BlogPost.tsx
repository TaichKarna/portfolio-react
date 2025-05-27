import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { title } = useParams<{ title: string }>();

  return (
    <div>
      <h1>Blog Post: {decodeURIComponent(title ?? '')}</h1>
      <p>Content for “{title}” goes here.</p>
    </div>
  );
};

export default BlogPost;
