import React from 'react'
import PropTypes from 'prop-types'

export default function BaseTextarea({
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
  const labelVariant = variant == 'line' ? 'hw-label--line' : ''
  const variation = variant != '' ? 'hw-textarea--' + variant : ''

  return (
    <label className={'hw-label ' + labelVariant} >
      {label}
      <textarea
        id={id}
        name={name}
        className={'hw-textarea ' + variation}
        rows={rows}
        cols={cols}
        maxlength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        readonly={readonly}
      >
        {children}
      </textarea>
    </label>
  )
}

BaseTextarea.defaultProps = {
    variant : ''
}

BaseTextarea.PropTypes = {
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
