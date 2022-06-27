import React from 'react'
import Callout from './Callout'
import PrimaryButton from '../Button/PrimaryButton'

export default {
    title: 'Components/Callout',
    component: Callout
}

const Template = (args) => (
    <Callout>
        <p>Some text in the callout</p>
        <PrimaryButton>More info</PrimaryButton>
    </Callout>
)

export const input = Template.bind({})
