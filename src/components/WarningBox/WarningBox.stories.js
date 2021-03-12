import React from 'react';
import WarningBox from './WarningBox';

export default {
  title: 'Components/Warning Box',
  component: WarningBox,
};

const Template = (args) => 
    <WarningBox {...args} >
        <p>The body text is here. Should not be very long</p>
        <a className="hw-link hw-link--solid" href="#">Click me</a>
    </WarningBox>;


export const Default = Template.bind({});
Default.args = {
  title: 'So, a Warning Box'
};
