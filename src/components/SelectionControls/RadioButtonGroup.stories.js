import React from 'react'
import RadioButtonGroup from './RadioButtonGroup'

export default {
    title: 'Components/Input/RadioButtonGroup',
    component: RadioButtonGroup
}

const Template = (args) => <RadioButtonGroup {...args} />

export const radiobuttongroup = Template.bind({})
radiobuttongroup.args = {
    name: 'test',
    options: [
        { label: 'one', value: '1' },
        { label: 'two', value: '2' }
    ],
    defaultSelected: '2',
    label: 'Radiobutton group',
    layout: ['full']
}

radiobuttongroup.storyName = 'RadioButtonGroup'
