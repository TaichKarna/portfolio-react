import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { title } = useParams<{ title: string }>();

  return (
    <div>
      <h1>Project: {decodeURIComponent(title ?? '')}</h1>
      <p>Details for project “{title}”.</p>
    </div>
  );
};

export default ProjectPage;
