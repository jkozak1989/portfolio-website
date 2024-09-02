import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import './Career.css';

export const Career = () => {
  const { page } = useContext(PageContext);
  return (
    <section
      id='career'
      className={`content-wrapper${page == 'Career' ? ' content-wrapper-visible' : ''}`}
    >
      Career
    </section>
  );
};
