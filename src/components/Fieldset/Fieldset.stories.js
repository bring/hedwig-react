import React from 'react';
import Fieldset from './Fieldset';

export default {
  title: 'Components/Fieldset/Default',
  component: Fieldset,
};

const Template = (args) => <Fieldset {...args} />;

export const fieldset = Template.bind({});
fieldset.args = {
  legend : "A fieldset with a legend",
};

fieldset.storyName="Default";

