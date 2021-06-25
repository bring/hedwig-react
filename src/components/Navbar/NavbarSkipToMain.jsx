import React from 'react'
import PropTypes from 'prop-types'

export default function NavbarSkipToMain({ href, title }) {
    return (
        <a href={href} className='hw-navbar__skip-to-content'>
            {title}
        </a>
    )
}

NavbarSkipToMain.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
