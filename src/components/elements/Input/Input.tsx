import { ButtonHTMLAttributes, HTMLProps, InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Input: React.FC<IInput> = ({ children, className, ...rest }) => {
  const inputClassName = `rounded-md h-[3rem] p-3 ${className || ''}`;

  return (
    <input className={inputClassName} {...rest}>
      {children}
    </input>
  );
};

export default Input;
