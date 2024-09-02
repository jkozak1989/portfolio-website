import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import './Technologies.css';

export const Technologies = () => {
  const { page } = useContext(PageContext);
  return (
    <section
      id='technologies'
      className={`content-wrapper${page == 'Technologies' ? ' content-wrapper-visible' : ''}`}
    >
      Technologies
    </section>
  );
};
