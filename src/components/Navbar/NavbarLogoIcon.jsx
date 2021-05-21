import React from 'react'
import PropTypes from 'prop-types'

export default function NavbarLogoIcon({ href, icon, title }) {
    return (
        <a href={href} className='hw-navbar__logo' style={{ zIndex: '300' }}>
            <svg
                className='hw-navbar__logo-standard'
                aria-labelledby='Logo'
                role='img'
            >
                <title id='Logo'>{title}</title>
                <use xlinkHref={'#logo-' + icon} />
            </svg>
        </a>
    )
}

NavbarLogoIcon.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['bring', 'posten']).isRequired,
    title: PropTypes.string.isRequired
}
