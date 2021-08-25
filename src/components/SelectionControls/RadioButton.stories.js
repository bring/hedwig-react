import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/Input/RadioButton/Default',
  component: RadioButton,
  
};

const Template = (args) => <RadioButton {...args} />;

export const radiobutton = Template.bind({});
radiobutton.args = {
  label : "label",
  value: "value",
};

radiobutton.storyName="Default";

