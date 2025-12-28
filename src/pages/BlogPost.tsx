import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MainContainer from '@/components/MainContainer';
import Back from '@/components/BackArrow';
import config from '@/config.json';

const BlogPost = () => {
  const { title } = useParams<{ title: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const post = config.blog.posts.find(p => p.slug === title);

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!title) {
        setError('No post title provided');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/blog/${title}.md`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError('Failed to load blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [title]);

  if (loading) {
    return (
      <MainContainer className="">
        <div className="pt-10 pb-20 lg:pb-16">
          <Back />
          <p className="text-muted-foreground mt-4">Loading...</p>
        </div>
      </MainContainer>
    );
  }

  if (error || !post) {
    return (
      <MainContainer className="">
        <div className="pt-10 pb-20 lg:pb-16">
          <Back />
          <p className="text-muted-foreground mt-4">{error || 'Post not found'}</p>
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer className="">
      <div className="pt-10 pb-20 lg:pb-16">
        <div className="flex flex-col gap-10">
          <Back />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {post.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold text-foreground mt-8 mb-4" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold text-foreground mt-6 mb-3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-semibold text-foreground mt-4 mb-2" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-4 leading-relaxed" {...props} />
                  ),
                  code: ({ node, className, ...props }: any) => {
                    const isInline = !className;
                    return isInline ? (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                    ) : (
                      <code className="block bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4" {...props} />
                    );
                  },
                  pre: ({ node, ...props }) => (
                    <pre className="mb-4" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="ml-4" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-primary underline underline-offset-4 hover:text-primary/80" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default BlogPost;
