import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Drawer from '../Drawer/Drawer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarDrawer({
    buttonText,
    closeTitle,
    icon,
    ariaLabel,
    children
}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                className='hw-navbar__item'
                onClick={() => setOpen(true)}
                aria-label={ariaLabel || buttonText}
            >
                {buttonText}
                <FontAwesomeIcon
                    icon={icon}
                    size='2x'
                    className='hw-navbar__icon'
                    title={buttonText}
                />
            </button>
            <Drawer
                open={open}
                closeTitle={closeTitle}
                closeCallback={() => setOpen(false)}
            >
                {children}
            </Drawer>
        </>
    )
}

NavbarDrawer.propTypes = {
    buttonText: PropTypes.string.isRequired,
    closeTitle: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    ariaLabel: PropTypes.string
}
