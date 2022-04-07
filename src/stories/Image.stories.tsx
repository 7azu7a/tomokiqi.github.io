import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './Image';

export default {
  title: 'Portfolio/Atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Main = Template.bind({});
Main.args = {
  src: '/logo.svg',
  alt: 'logo',
  width: '256px',
  height: '181px',
  objectFit: 'contain',
};
