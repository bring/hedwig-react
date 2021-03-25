import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function SimpleLink({ href, size, children }) {
  return (
    <BaseLink href={href} type='no-underline' size={size}>
      {children}
    </BaseLink>
  )
}

SimpleLink.defaultProps = {
  size: ''
}

SimpleLink.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'big', ''])
}
