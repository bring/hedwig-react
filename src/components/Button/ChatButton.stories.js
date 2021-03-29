import React from 'react'
import ChatButton from './ChatButton'

export default {
  title: 'Components/Buttons/Chat',
  component: ChatButton
}

const Template = (args) => <ChatButton {...args}></ChatButton>

export const CButton = Template.bind({})
CButton.args = {
  disabled: false,
  onClick: () => alert('This is an onclick test')
}

CButton.storyName = 'Chat'
