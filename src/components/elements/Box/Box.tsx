import React, { HTMLProps } from 'react';

interface IBox extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

const Box: React.FC<IBox> = ({ children, className, ...rest }) => {
  const boxClassName = `flex flex-col ${className || ''}`;

  return (
    <div className={boxClassName} {...rest}>
      {children}
    </div>
  );
};

export default Box;
