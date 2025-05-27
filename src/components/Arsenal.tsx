import { cn } from '@/lib/utils';
import MainContainer from './MainContainer';
import SectionHeading from './SectionHeading';
const tech = [
  {
    title: 'React & React Native',
    description:
      'Building smooth web and mobile apps with user-friendly interfaces.',
  },
  {
    title: 'Node.js',
    description: 'Creating scalable and efficient backend APIs.',
  },
  {
    title: 'PostgreSQL',
    description: 'Managing complex data with a reliable database.',
  },
  {
    title: 'TypeScript',
    description:
      'Ensuring cleaner, maintainable code by catching errors early.',
  },
  {
    title: 'AWS',
    description: 'Deploying and scaling apps on the cloud.',
  },
];

const Arsenal = () => {
  return (
    <MainContainer>
      <SectionHeading heading="arsenal" />
      <div className="grid md:grid-cols-2 gap-4">
        {tech.map((item, index) => (
          <div
            key={index}
            className={cn(
              'rounded-lg border border-border bg-muted/30 p-4 backdrop-blur-md',
              'transition-colors hover:border-muted-foreground/50'
            )}
          >
            <p className="text-primary  mb-2">
              $ <span className="text-foreground">{item.title}</span>
            </p>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default Arsenal;
