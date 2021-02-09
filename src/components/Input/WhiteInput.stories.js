import React from 'react';
import WhiteInput from './WhiteInput';

export default {
  title: 'Components/Input/White Input',
  component: WhiteInput,
  parameters: {
    backgrounds: {
      default: 'light-gray-stroke',
      values: [
        { name: 'light-gray-stroke', value: '#E4E4E4' },
        { name: 'light-gray-fill', value: '#F2F2F2' },
      ],
    },
  }
};

const Template = (args) => <WhiteInput {...args} />;

export const input = Template.bind({});
input.args = {
  label:'Label',
  type:'text',
  placeholder: 'placeholder'
};

input.storyName="White Input";

