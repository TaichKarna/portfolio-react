import MainContainer from '@/components/MainContainer';
import Back from '@/components/BackArrow';

const About = () => {
  return (
    <MainContainer className="">
      <div className="pt-10 pb-20 lg:pb-16">
        <div className="flex flex-col gap-10">
          <Back />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I began my journey in tech back in 9th grade, experimenting with
              HTML and CSS to build simple websites. In high school, I took C++
              classes and later, during my first year of university, I studied
              data structures in C++ and began exploring Python. In my second
              year, I participated in the{' '}
              <strong>e-Yantra Robotics Competition</strong>, where I gained
              hands-on experience with ROS2 and Gazebo. This helped me develop a
              strong understanding of robot kinematics and further improved my
              Python skills.
            </p>

            <p>
              Around the same time, I started learning through{' '}
              <strong>The Odin Project</strong>, an open-source curriculum for
              web development. I completed the JavaScript path, revisiting HTML,
              CSS, and JavaScript, and built several projects such as{' '}
              <em>Battleship</em> and <em>Knight’s Travails</em>—an
              implementation of breadth-first search (BFS). I then progressed
              through the React and Node.js sections, gaining experience in
              building full-stack applications with MongoDB.
            </p>

            <p>
              This learning experience led to an internship with{' '}
              <strong>Shobhit</strong>, where I contributed to developing a CRM
              application using React Native at{' '}
              <a href="https://procured.us" target="_blank" rel="noreferrer">
                @procured
              </a>
              .
            </p>

            <p>
              After that, I joined <strong>Vighnotech</strong>, where I worked
              on various projects using React Native, React, Node.js, and
              PostgreSQL to build CRM systems, applications and backend
              services. I have since moved on and am currently seeking new
              opportunities to grow and apply my skills as a developer.
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default About;
