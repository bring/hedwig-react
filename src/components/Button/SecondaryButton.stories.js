import React from 'react';
import SecondaryButton from './SecondaryButton';

export default {
  title: 'Components/Buttons/Secondary',
  component: SecondaryButton,
};

const Template = (args) => <SecondaryButton {...args} >Secondary Button</SecondaryButton>;

export const SButton = Template.bind({});
SButton.args = {
  disabled : false,
};

SButton.storyName="Secondary";

