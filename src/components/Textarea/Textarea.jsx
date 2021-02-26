import React from 'react'
import PropTypes from 'prop-types'
import BaseTextarea from './BaseTextarea'

export default function Textarea({
  id,
  name,
  label,
  variant,
  placeholder,
  rows,
  cols,
  maxLength,
  onChange,
  disabled,
  readonly,
  children
}) {
  return (
    <BaseTextarea
      id={id}
      name={name}
      label={label}
      variant={variant}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      onChange={onChange}
      disabled={disabled}
      readonly={readonly}
    >
      {children}
    </BaseTextarea>
  )
}

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['white', 'line', '']),
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool
}
