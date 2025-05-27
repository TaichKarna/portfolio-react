import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = ['first-post', 'react-router-in-ts', 'typescript-tips'];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((title) => (
          <li key={title}>
            <Link to={`/blog/${encodeURIComponent(title)}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
