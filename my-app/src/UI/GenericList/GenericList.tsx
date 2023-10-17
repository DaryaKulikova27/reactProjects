import React from 'react';
import styles from './genericlist.module.css';

interface IItem {
  text: string;
  id: string;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  onClick: (id: string) => void;
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, className, id, onClick, href}) => (
        <As 
          className={className} 
          key={id}
          onClick={() => onClick(id)}
          href={href}>
            {text}
        </As>
      ))}
    </>
  );
}
