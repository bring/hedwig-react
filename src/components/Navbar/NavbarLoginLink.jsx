import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/pro-regular-svg-icons'

export default function NavbarLoginLink({ href, text }) {
    return (
        <a href={href} className='hw-navbar__item'>
            {text + ' '}
            <FontAwesomeIcon
                icon={faUser}
                size='2x'
                className='hw-navbar__icon'
            />
        </a>
    )
}

NavbarLoginLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
