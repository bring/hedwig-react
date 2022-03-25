import React from 'react'
import PropTypes from 'prop-types'

export default function BaseTextarea({
    id,
    name,
    label,
    variant,
    placeholder,
    rows,
    cols,
    maxLength,
    onChange,
    disabled,
    readOnly,
    errorMessage,
    children
}) {
    let labelVariant = variant === 'line' ? 'hw-label--line' : ''
    let variation = variant !== '' ? 'hw-textarea--' + variant : ''
    if (errorMessage !== '') {
        labelVariant += ' hw-label--error'
        variation += ' hw-textarea--error'
    }

    return (
        <label className={'hw-label ' + labelVariant}>
            {label}
            <textarea
                id={id}
                name={name}
                className={'hw-textarea ' + variation}
                rows={rows}
                cols={cols}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
            >
                {children}
            </textarea>
            {errorMessage && (
                <div className='hw-error hw-error--align-left'>
                    {errorMessage}
                </div>
            )}
        </label>
    )
}

BaseTextarea.defaultProps = {
    variant: '',
    errorMessage: ''
}

BaseTextarea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.oneOf(['white', 'line', '']),
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    errorMessage: PropTypes.string
}
