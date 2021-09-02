import React from 'react'
import Breadcrumbs from './Breadcrumbs'

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    description: 'Hmm'
}

const Template = (args) => <Breadcrumbs {...args} />

export const Default = Template.bind({})
Default.args = {
    crumbs: [
        { linktext: 'Home', href: '#', title: 'Go back home' },
        { linktext: 'In between', href: '#', title: 'Go to in between' },
        { linktext: 'Previous', href: '#', title: 'Go back' }
    ],
    current: 'We are here'
}
export const JustCurrent = Template.bind({})
JustCurrent.args = {
    current: 'We are here'
}
