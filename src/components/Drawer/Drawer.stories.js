import React, { useState } from 'react'
import Drawer from './Drawer'
import PrimaryButton from '../Button/PrimaryButton'

export default {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'fullscreen'
    }
}

function Template(args) {
    const [open, setOpen] = useState(args.open)
    args = { ...args, open: open, closeCallback: () => setOpen(false) }
    return (
        <>
            <PrimaryButton onClick={() => setOpen(!open)}>
                Toggle drawer
            </PrimaryButton>
            <Drawer {...args}>
                <p>I am the drawer</p>
            </Drawer>
        </>
    )
}

export const input = Template.bind({})
input.args = {
    open: false,
    closeTitle: 'Close drawer',
    closeCallback: () => {}
}
