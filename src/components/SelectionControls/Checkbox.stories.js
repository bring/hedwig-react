import React from 'react'
import Checkbox from './Checkbox'

export default {
    title: 'Components/Input/Checkbox/Default',
    component: Checkbox
}

const Template = (args) => <Checkbox {...args} />

export const cbox = Template.bind({})
cbox.args = {
    label: 'label',
    value: 'value'
}

cbox.storyName = 'Default'
