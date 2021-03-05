import React from 'react';
import SubtleErrorMessage from './SubtleErrorMessage';

export default {
  title: 'Components/Message/Subtle Error',
  component: SubtleErrorMessage,
};

const Template = (args) => 
    <SubtleErrorMessage {...args} >
        <span>Something has gone wrong. Inline elements only.&nbsp;</span>
        <a className="hw-link hw-link--solid" href="#">More details</a>
    </SubtleErrorMessage>;


export const SubtleError = Template.bind({});
