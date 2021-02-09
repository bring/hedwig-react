import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  label:'Label',
  type:'text',
  placeholder: 'placeholder here'
};



