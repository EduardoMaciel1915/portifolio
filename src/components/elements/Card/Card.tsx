import React, { HTMLProps } from 'react';

interface ICard extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ children, className, ...rest }) => {
  const cardClassName = `
    flex flex-col 
    bg-white
    shadow-md
    rounded-lg
    ${className || ''}
  `;

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
