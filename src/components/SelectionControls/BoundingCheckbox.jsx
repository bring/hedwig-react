import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FieldsetContext from '../Fieldset/FieldsetContext'
import BaseCheckbox from './BaseCheckbox'

export default function BoundingCheckbox({
    name,
    label,
    value,
    checked,
    disabled,
    errorMessage,
    required,
    onClick
}) {
    const variants = useContext(FieldsetContext)
    const classes = ['bounding']
    if (variants) {
        const selectionControls = variants.find(
            (x) => x.name === 'selectionControls'
        )
        selectionControls.value.forEach((element) => {
            classes.push(element)
        })
    }

    return (
        <BaseCheckbox
            name={name}
            label={label}
            value={value}
            checked={checked}
            disabled={disabled}
            variants={classes}
            errorMessage={errorMessage}
            required={required}
            onClick={onClick}
        />
    )
}

BoundingCheckbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    required: PropTypes.bool,
    onClick: PropTypes.func
}
