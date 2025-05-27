import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import MainContainer from '@/components/MainContainer';

const Blog = () => {
  return (
    <MainContainer>
      <SectionHeading heading="blog" />

      <div className="mt-4 space-y-2">
        <p className=" text-md">{`> in progress`}</p>

        <Badge
          variant="secondary"
          className="text-xs font-mono bg-muted text-muted-foreground"
        >
          {new Date().toDateString()}
        </Badge>

        <p className="text-muted-foreground font-mono text-sm mt-1"></p>

        <a
          href="/#"
          className="text-primary text-sm  hover:underline inline-flex items-center gap-1"
        >
          read more <span>›</span>
        </a>
      </div>
    </MainContainer>
  );
};

export default Blog;
