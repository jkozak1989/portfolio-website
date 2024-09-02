import { useState } from 'react';
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Career } from './components/Career/Career';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Technologies } from './components/Technologies/Technologies';
import { PageContext } from './PageContext';

export type PageOption = 'Home' | 'AboutMe' | 'Technologies' | 'Career' | 'Portfolio' | 'Contact' | null;

function App() {
  const [page, setPage] = useState<PageOption>('Home');

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <Home />
      <AboutMe />
      <Technologies />
      <Career />
      <Portfolio />
      <Contact />
      <Header />
    </PageContext.Provider>
  );
}

export default App;
