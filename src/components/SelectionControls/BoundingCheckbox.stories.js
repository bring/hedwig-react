import React from 'react'
import BoundingCheckbox from './BoundingCheckbox'

export default {
    title: 'Components/Input/Checkbox/Bounding',
    component: BoundingCheckbox
}

const Template = (args) => <BoundingCheckbox {...args} />

export const cbox = Template.bind({})
cbox.args = {
    label: 'label'
}

cbox.storyName = 'Bounding'
