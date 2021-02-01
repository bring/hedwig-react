import React from 'react';
import WhiteDropdown from './WhiteDropdown';

export default {
  title: 'Components/Dropdown/White Dropdown',
  component: WhiteDropdown,
  parameters: {
    backgrounds: {
      default: 'light-gray-stroke',
      values: [
        { name: 'light-gray-stroke', value: '#E4E4E4' },
        { name: 'light-gray-fill', value: '#F2F2F2' },
      ],
    },
  }
};

const Template = (args) => <div style={{width:'220px'}}><WhiteDropdown {...args} /></div>;

export const td = Template.bind({});
td.args = {
  options : [
  {label:"Option 1", value:'1'}, {label:"Option 2", value:'2'}]
};

td.storyName = "White Dropdown";

