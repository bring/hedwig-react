import React from 'react'
import PropTypes from 'prop-types'

export default function BaseLink({ size, type, children }) {
  let modifier = type != '' ? ' hw-link--' + type : ''
  if(size != ''){
      modifier += ' hw-link--' + size
  }

  return (
    <a href='' className={'hw-link' + modifier}>
      {children}
    </a>
  )
}

BaseLink.defaultProps = {
  type: '',
  size : ''
}

BaseLink.propTypes = {
    size : PropTypes.oneOf(['small', 'big', '']),
    type : PropTypes.string,
}
