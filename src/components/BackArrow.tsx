import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const Back = ({ href = '/', className = '' }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={`text-muted-foreground hover:text-primary border-border hover:bg-primary-foreground transition-all ${className}`}
      asChild
    >
      <a href={href} className="flex items-center justify-center group">
        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      </a>
    </Button>
  );
};

export default Back;
