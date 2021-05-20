import React from 'react'
import Checkbox from '../SelectionControls/Checkbox'
import Fieldset from './Fieldset'

export default {
  title: 'Components/Fieldset/With checkboxes',
  component: Fieldset
}

const Template = (args) => (
  <Fieldset {...args}>
    <Checkbox label='Horisontal checkbox'></Checkbox>
    <Checkbox label='Horisontal checkbox 2'></Checkbox>
  </Fieldset>
)

export const fieldset = Template.bind({})
fieldset.args = {
  legend: 'Fieldset legend',
  selectionControls: ['horisontal']
}

fieldset.storyName = 'With checkboxes'
