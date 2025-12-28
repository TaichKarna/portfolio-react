import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import MainContainer from './MainContainer';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <MainContainer>
      <div className="">
        <div className="">
          <SectionHeading heading={'about'} />
          <div className="flex gap-7">
            <div className="flex w-2 bg-primary opacity-50 ml-1"></div>
            <div className="space-y-6 text-muted-foreground text-md leading-relaxed">
              <p>
                I began my development journey in school with HTML and CSS,
                eventually moving into full-stack development with JavaScript,
                Python, and tools like React and Node.js. My first hands-on
                experience came during an internship with{' '}
                <strong>Shobhit</strong>, where I helped build a CRM app using
                React Native at{' '}
                <a href="https://procured.us" target="_blank" rel="noreferrer">
                  @procured
                </a>
                .
              </p>

              <p>
                Later, I joined <strong>Vighnotech</strong>, working on CRM
                systems, mobile apps, and backend services using React Native,
                React, Node.js, and PostgreSQL. I contributed across the stack,
                from frontend features to database design and deployments. I'm
                now looking for new opportunities to grow and apply my skills as
                a developer.
              </p>

              <Button
                variant="link"
                className="p-0 h-auto text-primary hover:text-underline font-normal"
                asChild
              >
                <a href="/about" className="flex items-center gap-1 group">
                  read my full story
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default About;
