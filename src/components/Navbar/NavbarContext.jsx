import React, { createContext, useState } from 'react'

const NavbarContext = createContext([{}, () => {}])

const NavbarProvider = ({ children }) => {
    const [state, setState] = useState({ isSearching: false, menuOpen: false })
    return (
        <NavbarContext.Provider value={[state, setState]}>
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarContext, NavbarProvider }
