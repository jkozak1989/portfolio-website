import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import { Card } from '../Card/Card';
import Portrait from '../../assets/portrait.png';
import './Home.css';

export const Home = () => {
  const { page } = useContext(PageContext);
  return (
    <section className={`content-wrapper${page == 'Home' ? ' content-wrapper-visible' : ''} home`}>
      <div>
        <img
          src={Portrait}
          className='home-portrait'
        />
      </div>
      <div className='home-text-wrapper'>
        <div className='home-hero-text'>
          <div>
            Hi, I'm <span>Jarek</span>,
          </div>
          <div>Software Developer</div>
        </div>
        <Card className='home-description'>
          I’m an open-minded software developer who enjoys tackling problems with creativity and innovation. I think
          outside the box and come up with unique solutions for tricky challenges. I’m always learning and keeping up
          with the latest tech trends, which helps me build high-quality, efficient, and scalable software.
        </Card>
      </div>
    </section>
  );
};
