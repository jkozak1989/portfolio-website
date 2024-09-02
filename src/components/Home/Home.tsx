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
        <div className='home-hero-text'>
          <div>
            Hi, I'm <span>Jarek</span>,
          </div>
          <div>Software Developer</div>
        </div>
        <Card>
          I am an open-minded software developer dedicated to solving problems with genuine creativity and innovation.
        </Card>
      </div>
      <div>
        <img
          src={Portrait}
          className='home-portrait'
        />
      </div>
    </section>
  );
};
