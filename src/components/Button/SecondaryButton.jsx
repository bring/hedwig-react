import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

export default function SecondaryButton({
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
      variant='secondary'
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

SecondaryButton.defaultProps = {
  disabled: false,
  type: 'button'
}

SecondaryButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaControl: PropTypes.string,
  href: PropTypes.string
}
