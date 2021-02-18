import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function TextInput({
  label,
  placeholder,
  disabled,
  maxLength,
  errorMessage,
  onChange
}) {
  return (
    <BaseInput
      label={label}
      type='text'
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      onChange={onChange}
      errorMessage={errorMessage}
    />
  )
}

TextInput.defaultProps = {
  disabled: false
}

TextInput.propTypes = {
  variant: PropTypes.oneOf(['', 'white']),
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
