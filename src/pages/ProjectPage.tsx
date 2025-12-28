import { useParams } from 'react-router-dom';
import MainContainer from '@/components/MainContainer';
import Back from '@/components/BackArrow';
import config from '@/config.json';

const ProjectPage = () => {
  const { title } = useParams<{ title: string }>();
  const project = config.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === title
  );

  if (!project) {
    return (
      <MainContainer className="">
        <div className="pt-10 pb-20 lg:pb-16">
          <Back />
          <p className="text-muted-foreground mt-4">Project not found</p>
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer className="">
      <div className="pt-10 pb-20 lg:pb-16">
        <div className="flex flex-col gap-10">
          <Back />
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {project.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              view on github <span>›</span>
            </a>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ProjectPage;
