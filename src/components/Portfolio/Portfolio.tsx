import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import './Portfolio.css';

export const Portfolio = () => {
  const { page } = useContext(PageContext);
  return (
    <section
      id='portfolio'
      className={`content-wrapper${page == 'Portfolio' ? ' content-wrapper-visible' : ''}`}
    >
      Portfolio
    </section>
  );
};
