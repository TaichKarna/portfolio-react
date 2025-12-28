import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:title" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
