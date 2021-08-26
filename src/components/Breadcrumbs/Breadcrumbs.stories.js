import React from 'react'
import Breadcrumbs from './Breadcrumbs'

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs
}

const Template = (args) => <Breadcrumbs {...args} />

export const Default = Template.bind({})
Default.args = {
    crumbs: [
        { title: 'Home', href: '#' },
        { title: 'In between', href: '#' },
        { title: 'Previous', href: '#' }
    ],
    current: 'We are here'
}
