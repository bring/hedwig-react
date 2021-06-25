import React from 'react'
import { NavbarProvider } from './NavbarContext'

export default function Navbar({ children }) {
    return (
        <header className='hw-navbar'>
            <div className='hw-navbar__content'>
                <div className='hw-navbar__top'>
                    <NavbarProvider>{children}</NavbarProvider>
                </div>
            </div>
        </header>
    )
}
