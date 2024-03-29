import React from 'react'
import PropTypes from 'prop-types'

export default function BaseRadioButton({
    name,
    label,
    value,
    disabled,
    variants,
    errorMessage,
    required,
    defaultChecked,
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
        <React.Fragment>
            <label className={classes}>
                <input
                    type='radio'
                    name={name}
                    value={value}
                    disabled={disabled}
                    onClick={onClick}
                    required={required}
                    defaultChecked={defaultChecked}
                />
                <span className='hw-radio-button__label'>{label}</span>
                <i className='hw-radio-button__indicator'></i>
            </label>
            {errorMessage && (
                <div className='hw-error-simple hw-error--align-left'>
                    {errorMessage}
                </div>
            )}
        </React.Fragment>
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
    required: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    errorMessage: PropTypes.string,
    onClick: PropTypes.func
}
