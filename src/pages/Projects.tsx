import MainContainer from '@/components/MainContainer';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight } from 'lucide-react';
import config from '@/config.json';

const Projects = () => {
  const { projects } = config;

  return (
    <MainContainer className="">
      <div className="pt-10 pb-20 lg:pb-16">
        <SectionHeading heading="projects" />

        <div className="space-y-4 mt-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-muted-foreground/30 transition-colors group px-2 py-3"
            >
              <CardHeader className="px-2 pb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="transition-opacity text-foreground"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="px-2 pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Projects;
