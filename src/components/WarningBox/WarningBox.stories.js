import React from 'react';
import WarningBox from './WarningBox';
import SolidLink from '../Link/SolidLink';

export default {
  title: 'Components/Warning/WarningBox',
  component: WarningBox,
};

const Template = (args) => (
    <WarningBox {...args}>
        <p>The body text is here. Should not be very long</p>
        <SolidLink href='#'>Click me</SolidLink>
    </WarningBox>
)

export const Default = Template.bind({});
Default.args = {
  title: 'So, a Warning Box'
};
