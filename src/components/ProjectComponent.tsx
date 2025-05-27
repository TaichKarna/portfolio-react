import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import MainContainer from './MainContainer';

const Projects = () => {
  const projects = [
    {
      title: 'WordSpace',
      description:
        'a full-stack MERN blog app where users can create, edit, and delete posts, with admin control over users, stats, and moderation.',
      tags: ['mongodb', 'express', 'react', 'nodejs', 'javascript'],
      link: 'https://github.com/TaichKarna/WordSpace',
    },
    {
      title: 'CEREBUS-AI-CyberShield',
      description:
        'an ai-powered malware detection system using static, dynamic, and hybrid analysis techniques, with comprehensive reporting.',
      tags: ['jupyter', 'python', 'machine-learning', 'cybersecurity'],
      link: 'https://github.com/TaichKarna/CEREBUS-AI-CyberShield',
    },
    {
      title: 'LinkUp',
      description:
        'a real-time chat app built with react native and powered by a node.js + express backend, leveraging socket.io for live messaging.',
      tags: ['react-native', 'nodejs', 'express', 'socket.io'],
      link: 'https://github.com/TaichKarna/LinkUp',
    },
  ];

  return (
    <MainContainer>
      <SectionHeading heading="projects" />

      <div className="space-y-4">
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
                  className="transition-opacity  text-foreground"
                  asChild
                >
                  <a href={project?.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className=" px-2 pt-0">
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
    </MainContainer>
  );
};

export default Projects;
