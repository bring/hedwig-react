import React from 'react'
import PasswordInput from './PasswordInput'

export default {
    title: 'Components/Input/Password',
    component: PasswordInput,
    parameters: {}
}

const Template = (args) => <PasswordInput {...args} />

export const input = Template.bind({})
input.args = {
    label: 'Label',
    placeholder: 'placeholder'
}

input.storyName = 'Password'
