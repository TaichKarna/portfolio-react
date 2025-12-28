import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import MainContainer from '@/components/MainContainer';
import { Link } from 'react-router-dom';
import config from '@/config.json';

const Blog = () => {
  const { blog } = config;
  const latestPost = blog.posts[0];

  return (
    <MainContainer>
      <SectionHeading heading="blog" />

      <div className="mt-4 space-y-2">
        {latestPost && (
          <>
            <p className="text-md">{latestPost.title}</p>

            <Badge
              variant="secondary"
              className="text-xs font-mono bg-muted text-muted-foreground"
            >
              {new Date(latestPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Badge>

            <p className="text-muted-foreground font-mono text-sm mt-1">
              {latestPost.excerpt}
            </p>

            <Link
              to={`/blog/${latestPost.slug}`}
              className="text-primary text-sm hover:underline inline-flex items-center gap-1"
            >
              read more <span>›</span>
            </Link>
          </>
        )}
        {!latestPost && (
          <p className="text-md">{`> ${blog.status}`}</p>
        )}
      </div>
    </MainContainer>
  );
};

export default Blog;
