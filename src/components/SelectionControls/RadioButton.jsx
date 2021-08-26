import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FieldsetContext, { FieldsetProvider } from '../Fieldset/FieldsetContext'
import BaseRadioButton from './BaseRadioButton'

export default function RadioButton({
    name,
    label,
    value,
    disabled,
    errorMessage,
    required,
    onClick
}) {
    const variants = useContext(FieldsetContext)
    let classes = []
    if (variants) {
        var selectionControls = variants.find(
            (x) => x.name === 'selectionControls'
        )
        selectionControls.value.forEach((element) => {
            classes.push(element)
        })
    }

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

RadioButton.defaultProps = {
    errorMessage: ''
}

RadioButton.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    onClick: PropTypes.func
}
