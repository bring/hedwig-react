import React from 'react'
import Tab from './Tab'

export default {
    title: 'Components/Tab',
    component: Tab
}

const Template = (args) => <Tab {...args} />

export const input = Template.bind({})
input.args = {
    items: [
        {
            id: 'all',
            content: (
                <>
                    All <span className='hw-text-smaller'>(86)</span>
                </>
            )
        },
        {
            id: 'content',
            content: (
                <>
                    Content <span className='hw-text-smaller'>(4)</span>
                </>
            )
        },
        {
            id: 'content2',
            content: (
                <>
                    Content <span className='hw-text-smaller'>(4)</span>
                </>
            )
        },
        {
            id: 'content3',
            content: (
                <>
                    Content <span className='hw-text-smaller'>(4)</span>
                </>
            )
        },
        {
            id: 'units',
            content: 'Units'
        }
    ],
    onClick: () => {},
    selected: 'all'
}

input.storyName = 'Tab'
