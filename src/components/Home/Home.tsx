import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import { Card } from '../Card/Card';
import './Home.css';

export const Home = () => {
  const { page } = useContext(PageContext);
  return (
    <section className={`content-wrapper${page == 'Home' ? ' content-wrapper-visible' : ''} home`}>
      <div>
        <Card>Hi, I'm Jarek, Software Developer</Card>
        <Card>
          Passionate about exploring new technologies, I am an open-minded software developer dedicated to solving
          problems with genuine creativity and innovation.
        </Card>
      </div>
      <div>my image goes here</div>
    </section>
  );
};
