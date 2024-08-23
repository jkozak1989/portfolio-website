import { Navigation } from '../Navigation/Navigation';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>Logo</div>
      <Navigation />
    </header>
  );
};
