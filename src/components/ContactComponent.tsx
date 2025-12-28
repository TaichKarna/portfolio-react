import { Github, Mail, Twitter } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import MainContainer from '@/components/MainContainer';
import { Button } from '@/components/ui/button';
import config from '@/config.json';

const Contact = () => {
  const { contact } = config;
  
  return (
    <MainContainer>
      <SectionHeading heading="contact" />

      <p className="text-muted-foreground text-sm mt-2 mb-4">
        {contact.message}
      </p>

      <div className="flex gap-2">
        <Button variant="outline" size="icon" asChild>
          <a href={contact.links.github} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={contact.links.twitter} target="_blank" rel="noreferrer">
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={`mailto:${contact.links.email}`}>
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </MainContainer>
  );
};

export default Contact;
