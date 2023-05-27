import React, { HTMLProps } from 'react';

interface IFlex extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Flex: React.FC<IFlex> = ({ children, className, ...rest }) => {
  const flexClassName = `flex ${className || ''}`;

  return (
    <div className={flexClassName} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
