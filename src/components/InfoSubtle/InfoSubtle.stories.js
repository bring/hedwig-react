import React from 'react';
import InfoSubtle from './InfoSubtle';

export default {
  title: 'Components/Info Subtle',
  component: InfoSubtle,
};

const Template = (args) => 
    <InfoSubtle {...args} >
        The text is here. Inline elements only.&nbsp;
        <a className="hw-link" href="#">Click me</a>
    </InfoSubtle>;


export const Default = Template.bind({});
