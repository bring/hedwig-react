import React from 'react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'Components/Message/Error',
  component: ErrorMessage,
};

const Template = (args) => 
    <ErrorMessage {...args} >
        <p>Something has gone wrong. Please check it out.</p>
        <a className="hw-link hw-link--solid" href="#">More details</a>
    </ErrorMessage>;


export const Error = Template.bind({});
Error.args = {
  title: 'An error message'
};
