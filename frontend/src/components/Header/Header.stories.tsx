import { Story } from '@storybook/react';
import Header from './Header';

export default {
  title: 'components/Header',
  component: Header,
};

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
