import React from 'react'
import Drawer from './Drawer'

export default {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'fullscreen'
    }
}

const Template = (args) => <Drawer {...args} />

export const input = Template.bind({})
input.args = {
    open: false,
    closeTitle: 'Close drawer'
}

input.storyName = 'Default'
export const Default = Template.bind({})
