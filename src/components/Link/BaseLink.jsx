import React from 'react'
import PropTypes from 'prop-types'

export default function BaseLink({ href, size, type, children }) {
  let modifier = type != '' ? ' hw-link--' + type : ''
  if (size != '') {
    modifier += ' hw-link--' + size
  }

  return (
    <a href={href} className={'hw-link' + modifier}>
      {children}
    </a>
  )
}

BaseLink.defaultProps = {
  type: '',
  size: ''
}

BaseLink.propTypes = {
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'big', '']),
  type: PropTypes.string
}
