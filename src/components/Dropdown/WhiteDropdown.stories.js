import React from 'react';
import WhiteDropdown from './WhiteDropdown';

export default {
  title: 'Components/Dropdown/White Dropdown',
  component: WhiteDropdown,
};

const Template = (args) => <div style={{width:'220px'}}><WhiteDropdown {...args} /></div>;

export const td = Template.bind({});
td.args = {
  options : [
  {label:"Option 1", value:'1'}, {label:"Option 2", value:'2'}]
};

td.storyName = "White Dropdown";

