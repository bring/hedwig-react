import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function PasswordInput({
  name,
  label,
  placeholder,
  variant,
  disabled,
  errorMessage,
  onChange
}) {
  return (
    <BaseInput
      name={name}
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
  variant: PropTypes.oneOf(['', 'white', 'line']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
