import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { NavbarContext } from './NavbarContext'

export default function NavbarSearchButton({ text }) {
    const [state, setState] = useContext(NavbarContext)

    function handleClick() {
        setState((state) => ({ ...state, isSearching: true }))
    }

    return (
        <button className='hw-navbar__search-button' onClick={handleClick}>
            <span className='hw-navbar__search-text'>{text}</span>
            <FontAwesomeIcon
                icon={faSearch}
                className='hw-navbar__icon'
                size='2x'
            />
        </button>
    )
}
