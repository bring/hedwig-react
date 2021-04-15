import React from 'react';
import InfoBox from './InfoBox';
import Link from '../Link/Link';

export default {
  title: 'Components/Info/InfoBox',
  component: InfoBox,
};

const Template = (args) => 
    <InfoBox {...args} >
        <p>The body text is here. Should not be very long</p>
        <Link href='#'>Click me</Link>
    </InfoBox>;


export const Default = Template.bind({});
Default.args = {
  title: 'So, an Info Box'
};
