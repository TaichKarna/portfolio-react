import { Link } from 'react-router-dom';
import MainContainer from '@/components/MainContainer';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import config from '@/config.json';

const Blog = () => {
  const { posts } = config.blog;

  return (
    <MainContainer className="">
      <div className="pt-10 pb-20 lg:pb-16">
        <SectionHeading heading="blog" />
        
        <div className="space-y-4 mt-6">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="bg-card border-border hover:border-muted-foreground/30 transition-colors group px-2 py-3"
            >
              <CardHeader className="px-2 pb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <div className="flex-1">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="block"
                      >
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-2 pt-0">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-secondary/50 text-secondary-foreground"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary text-sm hover:underline inline-flex items-center gap-1"
                >
                  read more <span>›</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Blog;
