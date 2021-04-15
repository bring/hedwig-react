import React from 'react'
import { FieldsetProvider } from "./FieldsetContext"
import PropTypes from 'prop-types'

export default function Fieldset({ legend, selectionControls, children }) {
    
    const settings = [{name: "selectionControls", value: selectionControls}]

  return (
      <FieldsetProvider value={settings}>
    <fieldset class='hw-fieldset'>
      <legend class='hw-fieldset__legend'>{legend}</legend>
      <div class='hw-fieldset__content'>{children}</div>
    </fieldset>
    </FieldsetProvider>
  )
}

BaseCheckbox.propTypes = {
    settings: PropTypes.arrayOf(PropTypes.oneOf(["bounding", "full", "horisontal"]))
}