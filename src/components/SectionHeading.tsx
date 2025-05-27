import { Badge } from '@/components/ui/badge';

interface SectionHeadingProps {
  heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => (
  <div className="flex items-center gap-2 mb-6">
    <Badge variant="outline" className="text-primary bg-accent-foreground">
      #
    </Badge>
    <h2 className="text-2xl font-bold text-foreground">{heading}</h2>
  </div>
);

export default SectionHeading;
