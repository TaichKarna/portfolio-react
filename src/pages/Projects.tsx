import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = ['portfolio', 'iot-dashboard', 'chat-app'];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((title) => (
          <li key={title}>
            <Link to={`/project/${encodeURIComponent(title)}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
