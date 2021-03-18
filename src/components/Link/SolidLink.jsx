import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function SolidLink({ href, size, children }) {
  return (
    <BaseLink href={href} type='solid' size={size}>
      {children}
    </BaseLink>
  )
}

SolidLink.defaultProps = {
  size: ''
}

SolidLink.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'big', ''])
}
