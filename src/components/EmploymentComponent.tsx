import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import MainContainer from './MainContainer';

const Employment = () => {
  const jobs = [
    {
      company: 'Vighnotech',
      role: 'full-stack developer',
      period: '2024 Nov – 2024 May',
      description:
        'Worked on various projects involving React Native, React, Node.js, and PostgreSQL to build CRM systems, applications, and backend services. Focused on building and maintaining custom CRM systems and business automation tools for clients across multiple sectors.',
      tags: ['React Native', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://vighnotech.com',
    },
    {
      company: 'Workview',
      role: 'full stack intern',
      period: '2024 Oct – 2025 Jan',
      description:
        'Contributed to developing a CRM application using React Native during an internship. Gained practical experience building scalable mobile solutions and collaborating within a startup environment.',
      tags: ['React Native', 'CRM', 'JavaScript'],
      link: 'https://workview.io',
    },
  ];

  return (
    <MainContainer>
      <SectionHeading heading="employment" />

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <Card
            key={index}
            className="bg-card border-border hover:border-muted-foreground/30 transition-colors group px-2 py-3"
          >
            <CardHeader className="px-2 pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.role} • {job.period}
                    </p>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="transition-opacity text-foreground"
                  asChild
                >
                  <a href={job.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-2 pt-0">
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {job.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {job.tags.map((tag, tagIndex) => (
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

export default Employment;
