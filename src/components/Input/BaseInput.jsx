import React from 'react'
import PropTypes from 'prop-types'

export default function BaseInput({
  label,
  placeholder,
  type,
  min,
  max,
  steps,
  disabled,
  maxLength,
  variant,
  errorMessage,
  onChange
}) {
  var variation = variant != '' ? 'hw-input--' + variant : ''
  variation = variation + (errorMessage != '' ? ' hw-input--error' : '')
  const labelVariation = errorMessage != '' ? 'hw-label--error' : ''

  return (
    <label class={'hw-label ' + labelVariation}>
      {label}
      <input
        class={'hw-input ' + variation}
        type={type}
        min={min}
        max={max}
        steps={steps}
        placeholder={placeholder}
        disabled={disabled}
        maxlength={maxLength}
      />
      {errorMessage && (
        <div class='hw-error hw-error--align-left hw-error--indented'>
          {errorMessage}
        </div>
      )}
    </label>
  )
}

BaseInput.defaultProps = {
  disabled: false,
  type: 'text',
  errorMessage: '',
  variant: ''
}

BaseInput.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password']),
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['white', '']),
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
