import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import './AboutMe.css';

export const AboutMe = () => {
  const { page } = useContext(PageContext);
  return (
    <section
      id='about-me'
      className={`content-wrapper${page == 'AboutMe' ? ' content-wrapper-visible' : ''}`}
    >
      About Me
    </section>
  );
};
