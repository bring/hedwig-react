import React from 'react'
import BaseRadioButton from './BaseRadioButton'
import PropTypes from 'prop-types'

export default function RadioButtonGroup({
    options,
    name,
    label,
    defaultSelected,
    callBack,
    layout
}) {
    const radioButtons = options.map((option, index) => (
        <BaseRadioButton
            label={option.label}
            value={option.value}
            name={name}
            onClick={callBack}
            key={index}
            defaultChecked={option.value === defaultSelected}
            variants={layout}
        />
    ))

    return (
        <div className='hw-block hw-block--mb-medium-2'>
            <span className='hw-label'>{label}</span>
            {radioButtons}
        </div>
    )
}

RadioButtonGroup.defaultProps = {
    layout: []
}

RadioButtonGroup.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    callBack: PropTypes.func,
    layout: PropTypes.arrayOf(
        PropTypes.oneOf(['bounding', 'full', 'horisontal'])
    )
}
