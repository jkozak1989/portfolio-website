import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import { Timeline, TimelineItem } from '../Timeline/Timeline';
import './Career.css';

export const Career = () => {
  const { page } = useContext(PageContext);

  const items: TimelineItem[] = [
    {
      date: 'January 2024',
      title: '.Net Developer',
      description: 'Howdens',
    },
    {
      date: 'August 2022',
      title: 'Junior .Net Developer',
      description: 'Howdens',
    },
    {
      date: 'June 2022',
      title: 'Computer Science Bsc',
      description: 'Liverpool Hope University - A Class',
    },
  ];
  return (
    <section
      id='career'
      className={`content-wrapper${page == 'Career' ? ' content-wrapper-visible' : ''}`}
    >
      <Timeline items={items} />
    </section>
  );
};
