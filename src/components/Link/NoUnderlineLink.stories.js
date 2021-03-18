import React from 'react';
import NoUnderlineLink from './NoUnderlineLink';

export default {
  title: 'Components/Link/No underline',
  component: NoUnderlineLink,
};

const Template = (args) => <NoUnderlineLink {...args}>This is a link to be used in other components that are also links (i.e Cards)</NoUnderlineLink>;

export const input = Template.bind({});
input.args = {
  href: '#'
};

input.storyName="No underline";
