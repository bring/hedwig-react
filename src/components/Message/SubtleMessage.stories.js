import React from 'react';
import SubtleMessage from './SubtleMessage';

export default {
  title: 'Components/Message/Subtle',
  component: SubtleMessage,
};

const Template = (args) => 
    <SubtleMessage {...args} >
        <span>The body text is here. Inline elements only.&nbsp;</span>
        <a className="hw-link" href="#">Click me</a>
    </SubtleMessage>;


export const Subtle = Template.bind({});
