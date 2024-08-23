import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Career } from './components/Career/Career';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Technologies } from './components/Technologies/Technologies';

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Technologies />
      <Career />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
