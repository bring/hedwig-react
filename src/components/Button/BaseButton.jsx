import React from 'react'
import PropTypes from 'prop-types'

export default function BaseButton({
    variant,
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children,
    classList
}) {
    const classes = ['hw-button']
    if (variant !== '') classes.push('hw-button--' + variant)
    if (size) classes.push('hw-button--' + size)
    if (classList) classes.push(classList)

    if (href) {
        return (
            <a
                href={href}
                className={classes.join(' ')}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                type={type}
                className={classes.join(' ')}
                onClick={onClick}
                disabled={disabled}
                aria-controls={ariaControls}
            >
                {children}
            </button>
        )
    }
}

BaseButton.defaultProps = {
    variant: '',
    type: 'button',
    disabled: false
}

BaseButton.propTypes = {
    variant: PropTypes.oneOf([
        '',
        'chat',
        'chat-fixed',
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
    ariaControls: PropTypes.string,
    href: PropTypes.string,
    classList: PropTypes.string
}
