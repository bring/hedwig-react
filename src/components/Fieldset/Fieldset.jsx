import React from 'react'
import { FieldsetProvider } from './FieldsetContext'
import PropTypes from 'prop-types'

export default function Fieldset({ legend, selectionControls, children }) {
  const settings = [{ name: 'selectionControls', value: selectionControls }]

  return (
    <FieldsetProvider value={settings}>
      <fieldset className='hw-fieldset'>
        <legend className='hw-fieldset__legend'>{legend}</legend>
        <div className='hw-fieldset__content'>{children}</div>
      </fieldset>
    </FieldsetProvider>
  )
}

BaseCheckbox.propTypes = {
  settings: PropTypes.arrayOf(
    PropTypes.oneOf(['bounding', 'full', 'horisontal'])
  )
}
