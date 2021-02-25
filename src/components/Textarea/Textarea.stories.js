import React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Components/Input/Textarea',
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const input = Template.bind({});
input.args = {
    label:'label'
};

input.storyName="Textarea";

