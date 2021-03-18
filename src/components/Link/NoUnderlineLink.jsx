import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function NoUnderlineLink({ href, size, children }) {
  return (
    <BaseLink href={href} type='no-underline' size={size}>
      {children}
    </BaseLink>
  )
}

NoUnderlineLink.defaultProps = {
  size: ''
}

NoUnderlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'big', ''])
}
