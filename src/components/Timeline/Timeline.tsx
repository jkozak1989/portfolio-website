import { Card } from '../Card/Card';
import './Timeline.css';

export type TimelineProps = {
  items: TimelineItem[];
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export const Timeline = (props: TimelineProps) => {
  const { items } = props;
  return (
    <ul className='timeline'>
      {items.map((item) => (
        <li>
          <div className='timeline-date'>{item.date}</div>
          <Card className='timeline-card'>
            <div className='timeline-title'>{item.title}</div>
            <div className='timeline-description'>{item.description}</div>
          </Card>
        </li>
      ))}
    </ul>
  );
};
