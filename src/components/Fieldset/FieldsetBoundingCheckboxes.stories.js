import React from 'react'
import Checkbox from '../SelectionControls/Checkbox'
import Fieldset from './Fieldset'

export default {
  title: 'Components/Fieldset/With bounding checkboxes',
  component: Fieldset
}

const Template = (args) => (
  <Fieldset {...args}>
    <Checkbox label='Bounding checkbox'></Checkbox>
    <Checkbox label='Bounding checkbox 2'></Checkbox>
  </Fieldset>
)

export const fieldsetWithBoundignCheckboxes = Template.bind({})
fieldsetWithBoundignCheckboxes.args = {
  legend: 'Fieldset legend',
  selectionControls: ['bounding', 'full']
}

fieldsetWithBoundignCheckboxes.storyName = 'With bounding checkboxes'
