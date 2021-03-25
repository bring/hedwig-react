import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

export default function PrimaryOutlineButton({
  type,
  size,
  onClick,
  href,
  disabled,
  ariaControl,
  children
}) {
  return (
    <BaseButton
      variant='outline-primary'
      type={type}
      size={size}
      disabled={disabled}
      ariaControl={ariaControl}
      onClick={onClick}
      href={href}
    >
      {children}
    </BaseButton>
  )
}

PrimaryOutlineButton.defaultProps = {
  disabled: false,
  type: 'button'
}

PrimaryOutlineButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaControl: PropTypes.string,
  href: PropTypes.string
}
