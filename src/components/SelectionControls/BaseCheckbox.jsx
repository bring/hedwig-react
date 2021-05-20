import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function BaseCheckbox({
  label,
  value,
  checked,
  disabled,
  variants,
  errorMessage,
  required,
  onClick
}) {
  let classes = ''
  if (variants) {
    variants.forEach((element) => {
      classes += ' hw-checkbox--' + element
    })
  }

  if (errorMessage) {
    classes += ' hw-checkbox--error'
  }

  return (
    <label class={'hw-checkbox' + classes}>
      {label}
      <input
        type='checkbox'
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        required={required}
        onClick={onClick}
      />
      <i class='hw-checkbox__indicator'></i>
      {errorMessage && (
        <div class='hw-error-simple hw-error--align-left'>{errorMessage}</div>
      )}
    </label>
  )
}

BaseCheckbox.defaultProps = {
  errorMessage: '',
  checked: false,
  disabled: false
}

BaseCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  variants: PropTypes.arrayOf(
    PropTypes.oneOf(['bounding', 'full', 'horisontal'])
  ),
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  onClick: PropTypes.func
}
