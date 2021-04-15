import React from 'react';
import WarningSubtle from './WarningSubtle';
import SolidLink from '../Link/SolidLink';

export default {
    title: 'Components/Warning/WarningSubtle',
  component: WarningSubtle,
};

const Template = (args) => 
    <WarningSubtle { ...args } >
        The text is here. Inline elements only.&nbsp;
        <SolidLink href="#">Click me</SolidLink>
    </WarningSubtle>;


export const Default = Template.bind({});
