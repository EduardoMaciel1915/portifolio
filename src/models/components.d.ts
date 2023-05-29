import { ButtonHTMLAttributes } from 'react';

export as namespace componentsProps;

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  label?: string;
}
