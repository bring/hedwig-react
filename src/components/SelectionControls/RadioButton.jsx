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
    defaultChecked,
    onClick
}) {
    const variants = useContext(FieldsetContext)
    const classes = []
    if (variants) {
        const selectionControls = variants.find(
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
            defaultChecked={defaultChecked}
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
    requred: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    errorMessage: PropTypes.string,
    onClick: PropTypes.func
}
