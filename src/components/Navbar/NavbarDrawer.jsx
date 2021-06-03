import React, { useState } from 'react'
import Drawer from '../Drawer/Drawer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/pro-regular-svg-icons'

export default function NavbarDrawer({ buttonText, closeTitle, children }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button className='hw-navbar__item' onClick={() => setOpen(true)}>
                {buttonText}
                <FontAwesomeIcon
                    icon={faUser}
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
