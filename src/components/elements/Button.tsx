import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  label?: string;
}

const Button: React.FC<IButton> = ({ variant, className, label, ...rest }) => {
  const defaultStyles = `
    h-[3rem]
    flex justify-center items-center
    px-8
    rounded-lg shadow-md
    transition duration-200 ease-in-out
    hover:bg-white hover:border-black hover:text-black
    ${className}
  `;

  const buttonClassNamePrimary = `
    text-white text-lg font-medium
    bg-black
    border-solid border border-black
    ${defaultStyles}
  `;

  const buttonClassNameSecondary = `
    text-gray-600 text-lg font-medium
    bg-white
    border-solid border border-gray-400
    ${defaultStyles}
  `;

  const handleVariant = () => {
    switch (variant) {
      case 'primary':
        return buttonClassNamePrimary;
      case 'secondary':
        return buttonClassNameSecondary;
      default:
        return buttonClassNamePrimary;
    }
  };

  return (
    <button className={handleVariant()} {...rest}>
      {label}
    </button>
  );
};

export default Button;
