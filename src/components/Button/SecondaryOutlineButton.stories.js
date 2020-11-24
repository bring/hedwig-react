import React from 'react';
import SecondaryOutlineButton from './SecondaryOutlineButton';

export default {
  title: 'Components/Buttons/Secondary Outline',
  component: SecondaryOutlineButton,
};

const Template = (args) => <SecondaryOutlineButton {...args} >Secondary Outline Button</SecondaryOutlineButton>;

export const PButton = Template.bind({});
PButton.args = {
  disabled : false,
};

PButton.storyName="Secondary Outline";

