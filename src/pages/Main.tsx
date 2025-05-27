import About from '@/components/AboutComponent';
import Arsenal from '@/components/Arsenal';
import Blog from '@/components/BlogComponent';
import Contact from '@/components/ContactComponent';
import Employment from '@/components/EmploymentComponent';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/ProjectComponent';

const Main = () => {
  return (
    <div className="gap-12 flex flex-col pb-16">
      <Hero />
      <About />
      <Projects />
      <Employment />
      <Arsenal />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};
export default Main;
