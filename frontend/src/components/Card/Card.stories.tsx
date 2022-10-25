import { Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'components/Card',
  component: Card,
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '12rem',
  height: '12rem',
  color: '#FFD0D0',
};
