import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import MainContainer from './MainContainer';
import TimeCard from './TimeCard';
import config from '@/config.json';

const Hero = () => {
  const { hero } = config;
  
  return (
    <MainContainer className="flex flex-col pt-8">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-10">
        <div className="flex gap-6 text-2xl text-muted-foreground">
          <a
            href={hero.socialLinks.github}
            target="_blank"
            aria-label="GitHub"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href={hero.socialLinks.twitter}
            target="_blank"
            aria-label="Twitter"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter />
          </a>
          <a
            href={hero.socialLinks.leetcode}
            target="_blank"
            aria-label="LeetCode"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <SiLeetcode />
          </a>
          <a
            href={`mailto:${hero.socialLinks.email}`}
            aria-label="Email"
            className="hover:text-primary"
          >
            <HiOutlineMail />
          </a>
        </div>
        <TimeCard />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary mt-8">
        {hero.name}<span className="text-primary">.</span>
      </h1>

      <p className="text-sm sm:text-base leading-relaxed max-w-xl pt-4">
        {hero.description}
      </p>

      <p className="text-sm sm:text-base leading-relaxed max-w-xl pt-4">
        frontend engineer @{' '}
        <a
          href={hero.workLinks.wireonelabs}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 text-primary"
        >
          wireonelabs
        </a>
        . ex software engineering intern @{' '}
        <a
          href={hero.workLinks.thinkact}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 text-primary"
        >
          thinkact.ai
        </a>
        . ex full-stack developer @{' '}
        <a
          href={hero.workLinks.vighnotech}
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
