import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import './Contact.css';

export const Contact = () => {
  const { page } = useContext(PageContext);
  return (
    <section
      id='contact'
      className={`content-wrapper${page == 'Contact' ? ' content-wrapper-visible' : ''}`}
    >
      Contact
    </section>
  );
};
