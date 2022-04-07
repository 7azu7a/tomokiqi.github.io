import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Portfolio/Atoms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  text: 'Hello World',
};

export const Secondary = Template.bind({});
Secondary.args = {
  isPrimary: false,
  text: 'Goodbye World',
};
