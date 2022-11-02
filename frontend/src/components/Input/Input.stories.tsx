import { Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    width: {
      options: ['small', 'medium', 'full'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['default', 'circle'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['default', 'text'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const smallInput = Template.bind({});
smallInput.args = {
  width: 'small',
};

export const mediumInput = Template.bind({});
mediumInput.args = {
  width: 'medium',
};

export const fullInput = Template.bind({});
fullInput.args = {
  width: 'full',
};

export const circleInput = Template.bind({});
circleInput.args = {
  width: 'small',
  shape: 'circle',
};

export const textInput = Template.bind({});
textInput.args = {
  width: 'small',
  variant: 'text',
};
