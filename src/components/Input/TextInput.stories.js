import React from 'react'
import TextInput from './TextInput'

export default {
    title: 'Components/Input/Text',
    component: TextInput
}

const Template = (args) => <TextInput {...args} />

export const input = Template.bind({})
input.args = {
    label: 'Label',
    placeholder: 'placeholder here'
}

input.storyName = 'Text'
