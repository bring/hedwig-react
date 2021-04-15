import React from 'react';
import InfoSubtle from './InfoSubtle';

export default {
    title: 'Components/Info/InfoSubtle',
    component: InfoSubtle,
};

export const Default = (args) => 
    <InfoSubtle {...args} >
        The text is here. Inline elements only.&nbsp;
        <a className="hw-link" href="#">Click me</a>
    </InfoSubtle>;

export const Light = (args) => 
    <InfoSubtle {...args} >
        The text is here. Inline elements only.&nbsp;
        <a className="hw-link hw-link--inverted" href="#">Click me</a>
    </InfoSubtle>;


Light.args = { light: true };
Light.parameters = {
    backgrounds: { default: 'dark' }
}
