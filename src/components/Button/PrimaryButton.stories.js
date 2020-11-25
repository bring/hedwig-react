import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/Buttons',
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} >Primary Button</PrimaryButton>;

export const PButton = Template.bind({});
PButton.args = {
  disabled : false,
  onClick: ()=> alert('test')
};

PButton.storyName="Primary";

