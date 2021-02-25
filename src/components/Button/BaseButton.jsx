import React from 'react'
import PropTypes from 'prop-types'

export default function BaseButton({
  variant,
  type,
  size,
  onClick,
  disabled,
  ariaControl,
  children
}) {
  const buttonVariant = variant != '' ? 'hw-button--' + variant : ''
  const buttonSize = size ? 'hw-button--' + size : ''

  return (
    <button
      type={type}
      className={`hw-button ${buttonVariant} ${buttonSize}`}
      onClick={onClick}
      disabled={disabled}
      aria-control={ariaControl}
    >
      {children}
    </button>
  )
}

BaseButton.defaultProps = {
  variant: '',
  type: 'button',
  disabled: false,
}

BaseButton.propTypes = {
  variant: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'outline-primary',
    'outline-secondary',
    'outline-white'
  ]),
  type: PropTypes.oneOf(['button', 'submit']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaControl: PropTypes.string,
}
