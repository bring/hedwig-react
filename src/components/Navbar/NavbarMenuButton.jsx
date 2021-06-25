import React, { useContext, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import { NavbarContext } from './NavbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-regular-svg-icons'
import { faTimes } from '@fortawesome/pro-light-svg-icons'

export default function NavbarMenuButton({
    menuName,
    menuTitle,
    closeName,
    closeTitle
}) {
    const [state, setState] = useContext(NavbarContext)

    function handleClick() {
        setState((state) => ({ ...state, menuOpen: !state.menuOpen }))
    }

    const openLabel = createRef()
    const closeLabel = createRef()

    useEffect(() => {
        setState((state) => ({
            ...state,
            labelWidth: openLabel.current.offsetWidth
        }))
    }, [])

    function Icon({ icon, title }) {
        return (
            <span className='fa-stack hw-navbar__menu-button-toggle'>
                <FontAwesomeIcon
                    icon={icon}
                    className='fa-fw fa-stack-2x'
                    title={title}
                />
            </span>
        )
    }

    return (
        <button
            className='hw-navbar__menu-button'
            onClick={handleClick}
            aria-label={state.menuOpen ? closeTitle : menuTitle}
        >
            {!state.menuOpen && (
                <>
                    <span
                        className='hw-navbar__menu-button-label-menu'
                        ref={openLabel}
                        style={{ width: state.labelWidth }}
                    >
                        {menuName}
                    </span>
                    <Icon icon={faBars} title={menuTitle} />
                </>
            )}
            {state.menuOpen && (
                <>
                    {state.desktop && (
                        <span
                            className='hw-navbar__menu-button-label-close'
                            style={{
                                display: 'inline',
                                width: state.labelWidth
                            }}
                            ref={closeLabel}
                        >
                            {closeName}
                        </span>
                    )}
                    <Icon icon={faTimes} title={closeTitle} />
                </>
            )}
        </button>
    )
}

NavbarMenuButton.propTypes = {
    menuName: PropTypes.string.isRequired,
    menuTitle: PropTypes.string.isRequired,
    closeName: PropTypes.string.isRequired,
    closeTitle: PropTypes.string.isRequired
}
