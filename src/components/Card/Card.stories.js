import React from 'react'
import Card from './Card'

export default {
    title: 'Components/Card',
    component: Card
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'So, a card',
    imgUrl: 'http://placekitten.com/201/300'
}
