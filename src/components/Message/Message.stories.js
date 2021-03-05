import React from 'react';
import Message from './Message';

export default {
  title: 'Components/Message',
  component: Message,
};

const Template = (args) => 
    <Message {...args} >
        <p>The body text is here. Should not be very long</p>
        <a className="hw-link" href="#">Click me</a>
    </Message>;


export const Default = Template.bind({});
Default.args = {
  title: 'So, a message'
};
