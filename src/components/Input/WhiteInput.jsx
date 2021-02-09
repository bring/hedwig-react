import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

export default function WhiteInput({
  label,
  placeholder,
  type,
  disabled,
  onChange
}) {
  return (
    <BaseInput
      variant='white'
      label={label}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

WhiteInput.defaultProps = {
  disabled: false,
  type: 'text'
}

WhiteInput.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  onChange: PropTypes.func
}
