import React from 'react'
import PropTypes from 'prop-types'

export default function ServiceIcon({ icon, title, size }) {
    const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    return (
        <svg
            className={`hw-icon${size ? ' hw-icon--size-' + size : ''}`}
            aria-labelledby={id}
        >
            <title id={id}>{title}</title>
            <use xlinkHref={'#' + icon} />
        </svg>
    )
}

ServiceIcon.PropTypes = {
    icon: PropTypes.oneOf(['bring', 'posten']).isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['medium'])
}
