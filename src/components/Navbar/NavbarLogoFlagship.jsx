import React from 'react'
import PropTypes from 'prop-types'
import ServiceIcon from '../ServiceIcon/ServiceIcon'

export default function NavbarLogoFlagship({
    href,
    logo,
    title,
    ariaLabel,
    flagship
}) {
    return (
        <span className='hw-navbar__logo hw-navbar__logo--service'>
            <a
                href={href}
                style={{ zIndex: '300' }}
                aria-label={ariaLabel || title}
            >
                <ServiceIcon
                    icon={'logo-' + logo}
                    title={title}
                    className='hw-navbar__logo-standard'
                />
            </a>
            <span className='hw-navbar__logo-flagship'>{flagship}</span>
        </span>
    )
}

NavbarLogoFlagship.propTypes = {
    href: PropTypes.string.isRequired,
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    title: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    flagship: PropTypes.string.isRequired
}
