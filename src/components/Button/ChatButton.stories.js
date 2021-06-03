import React from 'react'
import ChatButton from './ChatButton'

export default {
    title: 'Components/Buttons/Chat',
    component: ChatButton
}

const Template = (args) => <ChatButton {...args} />

export const CButton = Template.bind({})
CButton.args = {
    disabled: false,
    // eslint-disable-next-line no-undef
    onClick: () => alert('This is an onclick test')
}

CButton.storyName = 'Chat'
