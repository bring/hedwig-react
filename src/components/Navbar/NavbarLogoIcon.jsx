import React from 'react'
import PropTypes from 'prop-types'
import ServiceIcon from '../ServiceIcon/ServiceIcon'

export default function NavbarLogoIcon({ href, logo, title, ariaLabel }) {
    return (
        <a
            href={href}
            className='hw-navbar__logo'
            style={{ zIndex: '300' }}
            aria-label={ariaLabel || title}
        >
            <ServiceIcon
                icon={'logo-' + logo}
                title={title}
                className='hw-navbar__logo-standard'
            />
        </a>
    )
}

NavbarLogoIcon.propTypes = {
    href: PropTypes.string.isRequired,
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    title: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
}
