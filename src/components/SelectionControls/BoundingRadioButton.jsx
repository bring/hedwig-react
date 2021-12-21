import React from 'react'
import PropTypes from 'prop-types'
import BaseRadioButton from './BaseRadioButton'

export default function BoundingRadioButton({
    name,
    label,
    value,
    disabled,
    errorMessage,
    required,
    defaultChecked,
    onClick
}) {
    const classes = ['bounding']

    return (
        <BaseRadioButton
            name={name}
            label={label}
            value={value}
            disabled={disabled}
            variants={classes}
            errorMessage={errorMessage}
            required={required}
            defaultChecked={defaultChecked}
            onClick={onClick}
        />
    )
}

BoundingRadioButton.defaultProps = {
    errorMessage: ''
}

BoundingRadioButton.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    errorMessage: PropTypes.string,
    onClick: PropTypes.func
}
