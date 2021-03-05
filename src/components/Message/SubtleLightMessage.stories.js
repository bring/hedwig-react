import React from 'react';
import SubtleLightMessage from './SubtleLightMessage';

export default {
  title: 'Components/Message/Subtle Light',
  component: SubtleLightMessage,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'gray-dark', value: '#6E6E6E' },
        { name: 'black', value: '#000000' },
      ],
    },
  }

};

const Template = (args) => 
    <SubtleLightMessage {...args} >
        <span>The body text is here. Inline elements only.&nbsp;</span>
        <a className="hw-link hw-link--inverted" href="#">Click me</a>
    </SubtleLightMessage>;


export const SubtleLight = Template.bind({});
