import React from 'react';
import InfoSubtle from './InfoSubtle';
import Link from '../Link/Link';
import InvertedLink from '../Link/InvertedLink';

export default {
    title: 'Components/Info/InfoSubtle',
    component: InfoSubtle,
};

export const Default = (args) => 
    <InfoSubtle {...args} >
        The text is here. Inline elements only.&nbsp;
        <Link href="#">Click me</Link>
    </InfoSubtle>;

export const Light = (args) => 
    <InfoSubtle {...args} >
        The text is here. Inline elements only.&nbsp;
        <InvertedLink href="#">Click me</InvertedLink>
    </InfoSubtle>;


Light.args = { light: true };
Light.parameters = {
    backgrounds: { default: 'dark' }
}
