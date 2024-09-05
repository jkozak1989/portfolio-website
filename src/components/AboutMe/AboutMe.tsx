import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import './AboutMe.css';
import { Card } from '../Card/Card';

export const AboutMe = () => {
  const { page } = useContext(PageContext);
  return (
    <section className={`about-me content-wrapper${page == 'AboutMe' ? ' content-wrapper-visible' : ''}`}>
      <Card className='about-me-column'>
        I am a passionate coder with a keen ability to find solutions in every challenge that comes my way, transforming
        them into valuable learning experiences. As a .Net Developer with a solid foundation in Computer Science, I am
        dedicated to delivering software solutions that drive innovation and efficiency.
      </Card>
      <Card className='about-me-column'>
        I hold a Bachelor's degree in Computer Science from Liverpool Hope University, and my skills extend to web
        development with HTML, CSS, JavaScript, and the React framework.
      </Card>
      <Card className='about-me-column'>
        In my current role as a .Net Developer, I've had the privilege of honing my software development skills, working
        on a variety of projects and mastering technologies like .Net, HTML, CSS, JavaScript, and React. My experiences
        have equipped me with a strong foundation in software engineering and a dedication to crafting robust solutions.
      </Card>
      <Card className='about-me-column'>
        I am enthusiastic about the opportunity to continue my growth as a developer and am actively seeking new
        challenges in the field. I am open to exploring and embracing new technologies and programming languages to
        expand my expertise further. I'm excited to contribute my skills and passion for coding to innovative projects
        and teams, where I can make a meaningful impact.
      </Card>
    </section>
  );
};
