import React from 'react'
import BoundingRadioButton from './BoundingRadioButton'

export default {
    title: 'Components/Input/RadioButton/Bounding',
    component: BoundingRadioButton
}

const Template = (args) => <BoundingRadioButton {...args} />

export const boundingradiobutton = Template.bind({})
boundingradiobutton.args = {
    label: 'label',
    value: 'value',
    defaultChecked: true
}

boundingradiobutton.storyName = 'Bounding'
