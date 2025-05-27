import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import MainContainer from './MainContainer';
import TimeCard from './TimeCard';

const Hero = () => {
  return (
    <MainContainer className="flex flex-col pt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-10">
        <div className="flex gap-6 text-2xl text-muted-foreground">
          <a
            href="https://github.com/TaichKarna"
            target="_blank"
            aria-label="GitHub"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/MandipSing47634"
            target="_blank"
            aria-label="Twitter"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter />
          </a>
          <a
            href="https://leetcode.com/u/TaichiKarna/"
            target="_blank"
            aria-label="LeetCode"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <SiLeetcode />
          </a>
          <a
            href="mailto:taichikarna@gmail.com"
            aria-label="Email"
            className="hover:text-primary"
          >
            <HiOutlineMail />
          </a>
        </div>
        <TimeCard />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary mt-8">
        mandeep<span className="text-primary">.</span>
      </h1>

      <p className="text-sm sm:text-base leading-relaxed max-w-xl pt-4">
        full-stack developer focused on{' '}
        <span className="font-semibold">react</span>,{' '}
        <span className="font-semibold">node.js</span>, and{' '}
        <span className="font-semibold">web technologies</span>. also building
        mobile apps with <span className="font-semibold">react native</span>.
      </p>

      <p className="text-sm sm:text-base leading-relaxed max-w-xl pt-4">
        ex-intern @{' '}
        <a
          href="https://workview.io/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 text-primary"
        >
          workview.io
        </a>
        . ex full-stack intern @{' '}
        <a
          href="https://vighnotech.com/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 text-primary"
        >
          vighnotech
        </a>
        .
      </p>
    </MainContainer>
  );
};

export default Hero;
