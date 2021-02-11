import React from 'react'
import PropTypes from 'prop-types'
import BaseDropdown from './BaseDropdown'

export default function WhiteDropdown({
  label,
  name,
  id,
  selected,
  onChange,
  options
}) {
  return (
    <BaseDropdown
      variant='white'
      label={label}
      id={id}
      selected={selected}
      onChange={onChange}
      options={options}
    />
  )
}
