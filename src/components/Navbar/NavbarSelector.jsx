import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import NavbarSelectorItem from './NavbarSelectorItem'
import { NavbarContext } from './NavbarContext'

export default function NavbarSelector({ items, desktop }) {
    const [state] = useContext(NavbarContext)

    if (state.desktop === desktop) {
        return (
            <div
                className={`hw-navbar__selector${
                    !desktop ? ' hw-navbar__selector__mobile' : ''
                }`}
            >
                {items.map(({ title, href, selected, ariaLabel }) => (
                    <NavbarSelectorItem
                        title={title}
                        href={href}
                        selected={selected}
                        ariaLabel={ariaLabel}
                        key={title}
                    />
                ))}
            </div>
        )
    }
    return null
}

NavbarSelector.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            selected: PropTypes.bool,
            ariaLabel: PropTypes.string
        })
    ),
    desktop: PropTypes.bool
}

NavbarSelector.defaultProps = {
    desktop: true
}
