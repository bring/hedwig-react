import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function NumberInput({
  label,
  placeholder,
  min,
  max,
  steps,
  variant,
  disabled,
  errorMessage,
  onChange
}) {
  return (
    <BaseInput
      variant={variant}
      label={label}
      type='number'
      min={min}
      max={max}
      steps={steps}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      errorMessage={errorMessage}
    />
  )
}

NumberInput.defaultProps = {
  disabled: false,
}

NumberInput.propTypes = {
  variant: PropTypes.oneOf(['', 'white']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.number,
  max :PropTypes.number,
}