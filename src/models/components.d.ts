import { ButtonHTMLAttributes } from 'react';

export as namespace componentsProps;

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  label?: string;
}
