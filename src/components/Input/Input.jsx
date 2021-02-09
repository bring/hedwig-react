import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function Input({
  label,
  placeholder,
  type,
  disabled,
  variant,
  onChange
}) {
  return (
    <BaseInput
      variant={variant}
      label={label}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

Input.defaultProps = {
  disabled: false,
  type: 'text',
  variant: ''
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  variant: PropTypes.oneOf(['', 'white']),
  onChange: PropTypes.func
}
