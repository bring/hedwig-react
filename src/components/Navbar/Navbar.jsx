import React from 'react'
import { NavbarProvider } from './NavbarContext'

export default function Navbar({ children }) {
    const hasService = children.find(
        (child) => child.type.displayName in ['NavbarLogoFlagship']
    )

    return (
        <header className='hw-navbar'>
            <div className='hw-navbar__content'>
                <div
                    className={
                        'hw-navbar__top' +
                        (hasService ? ' hw-navbar__top--service' : '')
                    }
                >
                    <NavbarProvider>{children}</NavbarProvider>
                </div>
            </div>
        </header>
    )
}
