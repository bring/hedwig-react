import React from 'react'
import PropTypes from 'prop-types'
import BaseDropdown from './BaseDropdown'

export default function Dropdown({
  label,
  name,
  variant,
  id,
  selected,
  onChange,
  options
}) {
  return (
    <BaseDropdown
      variant=''
      label={label}
      id={id}
      selected={selected}
      onChange={onChange}
      options={options}
    />
  )
  ;}
