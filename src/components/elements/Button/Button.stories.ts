import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: { label: 'Button', variant: 'primary' },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as Meta<componentsProps.IButton>;

export const Default: StoryObj<componentsProps.IButton> = {};
