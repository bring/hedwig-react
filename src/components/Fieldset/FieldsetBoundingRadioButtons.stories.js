import React from 'react'
import RadioButton from '../SelectionControls/RadioButton'
import Fieldset from './Fieldset'

export default {
  title: 'Components/Fieldset/With bounding radiobuttons',
  component: Fieldset
}

const Template = (args) => (
  <Fieldset {...args}>
    <RadioButton label='radio button'></RadioButton>
    <RadioButton label='radio button'></RadioButton>
  </Fieldset>
)

export const fieldsetWithBoundingRadiobuttons = Template.bind({})
fieldsetWithBoundingRadiobuttons.args = {
  legend: 'Fieldset legend',
  selectionControls: ['bounding']
}

fieldsetWithBoundingRadiobuttons.storyName = 'With bounding radiobuttons'
