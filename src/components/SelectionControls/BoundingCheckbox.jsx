import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FieldsetContext, { FieldsetProvider } from '../Fieldset/FieldsetContext'
import BaseCheckbox from './BaseCheckbox';

export default function BoundingCheckbox({ label, value, checked, disabled, errorMessage }) {

  const variants = useContext(FieldsetContext)
  let classes = [];
  if (variants) {
     var selectionControls = variants.find((x) => x.name ==="selectionControls")  
     selectionControls.value.forEach(element => {
       classes.push(element)
     })
  }

  classes.push("bounding")

  return (
    <BaseCheckbox label={label} value={value} checked={checked} disabled={disabled} variants={classes} errorMessage={errorMessage}/>
  )
}

BoundingCheckbox.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string
  }
