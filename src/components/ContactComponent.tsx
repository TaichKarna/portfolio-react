import { Github, Mail, Twitter } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import MainContainer from '@/components/MainContainer';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <MainContainer>
      <SectionHeading heading="contact" />

      <p className="text-muted-foreground text-sm mt-2 mb-4">
        i'm always open to new opportunities and collaborations. feel free to
        reach out!
      </p>

      <div className="flex gap-2">
        <Button variant="outline" size="icon" asChild>
          <a href="https://github.com/taichkarna" target="_blank">
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://x.com/MandipSing47634" target="_blank">
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="mailto:taichikarna@gmail.com">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </MainContainer>
  );
};

export default Contact;
