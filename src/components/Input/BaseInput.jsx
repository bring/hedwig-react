import React from 'react'
import PropTypes from 'prop-types'

export default function BaseInput({
  label,
  placeholder,
  type,
  disabled,
  variant,
  onChange
}) {
  const variation = variant != '' ? 'hw-input--' + variant : ''

  return (
    <label class='hw-label'>
      {label}
      <input
        class={'hw-input ' + variation}
        type='text'
        placeholder={placeholder}
      />
    </label>
  )
}

BaseInput.defaultProps = {
  disabled: false,
  type: 'text'
}

BaseInput.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['white', ''])
}
