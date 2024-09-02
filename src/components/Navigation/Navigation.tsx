import { useContext } from 'react';
import { PageContext } from '../../PageContext';

import './Navigation.css';

export const Navigation = () => {
  const { page, setPage } = useContext(PageContext);
  return (
    <nav className='navigation'>
      <div
        onClick={() => setPage('Home')}
        className={page == 'Home' ? 'navigation-item-active' : 'navigation-item'}
      >
        Home
      </div>
      <div
        onClick={() => setPage('AboutMe')}
        className={page == 'AboutMe' ? 'navigation-item-active' : 'navigation-item'}
      >
        About Me
      </div>
      <div
        onClick={() => setPage('Technologies')}
        className={page == 'Technologies' ? 'navigation-item-active' : 'navigation-item'}
      >
        Technologies
      </div>
      <div
        onClick={() => setPage('Career')}
        className={page == 'Career' ? 'navigation-item-active' : 'navigation-item'}
      >
        Career
      </div>
      <div
        onClick={() => setPage('Portfolio')}
        className={page == 'Portfolio' ? 'navigation-item-active' : 'navigation-item'}
      >
        Portfolio
      </div>
      <div
        onClick={() => setPage('Contact')}
        className={page == 'Contact' ? 'navigation-item-active' : 'navigation-item'}
      >
        Contact
      </div>
    </nav>
  );
};
