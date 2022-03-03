import React from 'react'
import EmailInput from './EmailInput'

export default {
  title: 'Components/Input/Email',
  component: EmailInput,
};

const Template = (args) => <EmailInput {...args} />;

export const input = Template.bind({});
input.args = {
  label:'Label',
  placeholder: 'placeholder here'
};

input.storyName="Email";

