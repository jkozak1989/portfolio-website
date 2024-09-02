import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import './Technologies.css';
import { Card } from '../Card/Card';

export const Technologies = () => {
  const { page } = useContext(PageContext);
  return (
    <section className={`content-wrapper${page == 'Technologies' ? ' content-wrapper-visible' : ''} technologies`}>
      <div className='technologies-title'>Tech Stack</div>
      <div className='technologies-list'>
        <Card>HTML</Card>
        <Card>CSS</Card>
        <Card>JavaScript</Card>
        <Card>TypeScript</Card>
        <Card>React</Card>
        <Card>C#</Card>
        <Card>.NET</Card>
        <Card>SQL</Card>
      </div>
      <div className='technologies-title'>Learning Journey</div>
      <div className='technologies-list'>
        <Card>React Native</Card>
        <Card>Node</Card>
        <Card>Unity</Card>
        <Card>Solidity</Card>
        <Card>Web3</Card>
      </div>
    </section>
  );
};
