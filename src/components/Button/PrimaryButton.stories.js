import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/Buttons/Primary',
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} >Primary Button</PrimaryButton>;

export const PButton = Template.bind({});
PButton.args = {
  disabled : false,
  onClick: ()=> alert('This is an onclick test')
};

PButton.storyName="Primary";

