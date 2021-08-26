import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function BaseRadioButton({
    name,
    label,
    value,
    disabled,
    variants,
    errorMessage,
    required,
    onClick
}) {
    let classes = 'hw-radio-button'
    if (variants) {
        variants.forEach((element) => {
            classes += ' hw-radio-button--' + element
        })
    }

    if (errorMessage) {
        classes += ' hw-radio-button--error'
    }

    return (
        <>
      <label className={classes}>
          <input
            type='radio'
            name={name}
            value={value}
            disabled={disabled}
            onClick={onClick}
            required={required}
            />
            <span className='hw-radio-button__label'>{label}</span>
            <i className='hw-radio-button__indicator'></i>
        </label>
        {errorMessage && 
            <div class="hw-error-simple hw-error--align-left">{errorMessage}</div>
        }
        </>
    )
}

BaseRadioButton.defaultProps = {
    errorMessage: '',
    disabled: false
}

BaseRadioButton.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    variants: PropTypes.arrayOf(
        PropTypes.oneOf(['bounding', 'full', 'horisontal'])
    ),
    errorMessage: PropTypes.string,
    onClick: PropTypes.func
}
