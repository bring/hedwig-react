import React from 'react'
import PropTypes from 'prop-types'

export default function ServiceIcon({ icon, title, size, className }) {
    const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    return (
        <svg
            className={`hw-icon${size ? ' hw-icon--size-' + size : ''}${
                className ? ' ' + className : ''
            }`}
            aria-labelledby={id}
        >
            <title id={id}>{title}</title>
            <use xlinkHref={'#' + icon} />
        </svg>
    )
}

ServiceIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['medium'])
}
