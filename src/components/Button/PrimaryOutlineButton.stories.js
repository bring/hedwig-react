import React from 'react';
import PrimaryOutlineButton from './PrimaryOutlineButton';

export default {
  title: 'Components/Buttons/Primary Outline',
  component: PrimaryOutlineButton,
};

const Template = (args) => <PrimaryOutlineButton {...args} >Primary Outline Button</PrimaryOutlineButton>;

export const PButton = Template.bind({});
PButton.args = {
  disabled : false,
};

PButton.storyName="Primary Outline";

