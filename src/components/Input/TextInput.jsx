import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function TextInput({
  name,
  label,
  placeholder,
  disabled,
  maxLength,
  errorMessage,
  variant,
  onChange,
  readOnly,
  ref
}) {
  return (
    <BaseInput
      name={name}
      label={label}
      type='text'
      variant={variant}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      onChange={onChange}
      errorMessage={errorMessage}
      readOnly={readOnly}
      ref={ref}
    />
  )
}

TextInput.defaultProps = {
  disabled: false
}

TextInput.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.oneOf(['', 'white', 'line']),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
