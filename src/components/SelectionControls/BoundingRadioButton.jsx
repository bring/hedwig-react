import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FieldsetContext, { FieldsetProvider } from '../Fieldset/FieldsetContext'
import BaseRadioButton from './BaseRadioButton'

export default function BoundingRadioButton({
    name,
    label,
    value,
    disabled,
    errorMessage,
    required,
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
    errorMessage: PropTypes.string,
    onClick: PropTypes.func
}
