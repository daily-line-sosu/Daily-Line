import { Story } from '@storybook/react';
import Progress, { ProgressProps } from './Progress';

export default {
  title: 'components/Progress',
  component: Progress,
  argTypes: {
    color: {
      options: ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const defaultProgress = Template.bind({});
defaultProgress.args = {
  color: 'pink',
  percent: 50,
  done: false,
};

export const doneProgress = Template.bind({});
doneProgress.args = {
  color: 'gray',
  percent: 100,
  done: true,
};
