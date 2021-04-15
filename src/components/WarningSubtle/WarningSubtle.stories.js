import React from 'react';
import WarningSubtle from './WarningSubtle';

export default {
    title: 'Components/Warning/WarningSubtle',
  component: WarningSubtle,
};

const Template = (args) => 
    <WarningSubtle { ...args } >
        The text is here. Inline elements only.&nbsp;
        <a className="hw-link hw-link--solid" href="#">Click me</a>
    </WarningSubtle>;


export const Default = Template.bind({});
