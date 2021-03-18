import React from 'react';
import SolidLink from './SolidLink';

export default {
  title: 'Components/Link/SolidLink',
  component: SolidLink,
};

const Template = (args) => <SolidLink {...args}>This is a solid link</SolidLink>;

export const input = Template.bind({});
input.args = {
  
};

input.storyName="SolidLink";

