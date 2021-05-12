import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const TestDropdown = Template.bind({});
TestDropdown.args = {
  label:"Label",
  options : [
  {label:"Option 1", value:'1'}, {label:"Option 2", value:'2'}]
};

TestDropdown.storyName="Dropdown";

