import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'

export default function CheckboxGroup({ label, options}) {

    const items = options.map((item,index) =>
    <Checkbox label={item.label} value={item.value} />
    );
  return (
    <div>
        {items}
    </div>
  )
}
