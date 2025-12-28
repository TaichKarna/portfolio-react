import { cn } from '@/lib/utils';
import MainContainer from './MainContainer';
import SectionHeading from './SectionHeading';
import config from '@/config.json';

const Arsenal = () => {
  const tech = config.arsenal;
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
