import React from 'react';
import NumberInput from './NumberInput';

export default {
  title: 'Components/Input/Number',
  component: NumberInput,
  parameters: {
  }
};

const Template = (args) => <div style={{width:'300px'}}><NumberInput {...args} /></div>;

export const input = Template.bind({});
input.args = {
  label:'Label',
  placeholder: 'Please provide a number'
};

input.storyName="Number";

