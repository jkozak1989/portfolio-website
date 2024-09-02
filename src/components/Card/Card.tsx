import { ReactNode } from 'react';
import './Card.css';

type CardProps = {
  className?: string;
  children: ReactNode;
};

export const Card = (props: CardProps) => {
  const { className, children } = props;

  return <section className={`card ${className ?? ''}`}>{children}</section>;
};
