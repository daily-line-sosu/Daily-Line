import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const primaryButton = Template.bind({});
primaryButton.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Button Test',
};

export const secondaryButton = Template.bind({});
secondaryButton.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'Button Test',
};

export const textButton = Template.bind({});
textButton.args = {
  variant: 'text',
  size: 'medium',
  children: 'Button Test',
};

export const disabledButton = Template.bind({});
disabledButton.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Button Test',
  disabled: true,
};
