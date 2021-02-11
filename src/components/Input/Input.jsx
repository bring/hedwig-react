import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function Input({
  label,
  placeholder,
  type,
  disabled,
  errorMessage,
  onChange
}) {
  return (
    <BaseInput
      label={label}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      errorMessage={errorMessage}
    />
  )
}

Input.defaultProps = {
  disabled: false,
  type: 'text'
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
