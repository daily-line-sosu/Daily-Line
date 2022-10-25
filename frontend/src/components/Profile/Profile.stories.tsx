import { Story } from '@storybook/react';
import Profile, { ProfileProps } from './Profile';

export default {
  title: 'components/Profile',
  component: Profile,
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  nickname: '대구올클녀',
  image: 'https://i.pinimg.com/564x/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg',
};
