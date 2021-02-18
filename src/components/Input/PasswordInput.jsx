import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function PasswordInput({
  label,
  placeholder,
  variant,
  disabled,
  errorMessage,
  onChange
}) {
  return (
    <BaseInput
      variant={variant}
      label={label}
      type='password'
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      errorMessage={errorMessage}
    />
  )
}

PasswordInput.defaultProps = {
  disabled: false,
  type: 'text'
}

PasswordInput.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
