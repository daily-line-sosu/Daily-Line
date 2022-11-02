import { Story } from '@storybook/react';
import Box from '../Box/Box';
import Select, { SelectProps } from './Select';

export default {
  title: 'components/Select',
  component: Select,
};

const Template: Story<SelectProps> = (args) => (
  <Box status="disabled">
    <Select {...args} />
  </Box>
);
export const Default = Template.bind({});
Default.args = {
  name: 'tag',
  value: 0,
  options: [
    { seq: 1, name: '스터디' },
    { seq: 2, name: '운동' },
    { seq: 3, name: '생활' },
  ],
};
