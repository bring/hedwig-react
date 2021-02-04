import React from 'react';
import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args}>Hmm</Badge>;

export const Primary = Template.bind({});
Primary.args = {
};
