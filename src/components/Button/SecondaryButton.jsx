import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

export default function SecondaryButton({
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    classList,
    children
}) {
    return (
        <BaseButton
            variant='secondary'
            type={type}
            size={size}
            disabled={disabled}
            ariaControls={ariaControls}
            onClick={onClick}
            href={href}
            classList={classList}
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
    ariaControls: PropTypes.string,
    href: PropTypes.string,
    classList: PropTypes.string
}
