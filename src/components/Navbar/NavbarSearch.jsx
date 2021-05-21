import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'
import Search from '../Search/Search'
import { NavbarContext } from './NavbarContext'

export default function NavbarSearch({ ariaLabel, placeholder }) {
    const [state, setState] = useContext(NavbarContext)

    function handleClick() {
        setState((state) => ({ ...state, isSearching: false }))
    }
    return (
        state.isSearching && (
            <section className='hw-navbar__search' style={{ display: 'block' }}>
                <Search
                    ariaLabel={ariaLabel}
                    placeholder={placeholder}
                    autoFocus
                />
                <button
                    className='hw-navbar__close-search'
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faTimes} size='2x' />
                </button>
            </section>
        )
    )
}
