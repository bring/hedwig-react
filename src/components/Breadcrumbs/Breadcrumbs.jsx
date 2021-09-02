import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons'

export default function Breadcrumbs({ crumbs, current }) {
    const [desktop, setDesktop] = useState()

    function handleWindowSizeChange() {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    function Crumb({ crumb: { linktext, href, title } }) {
        return (
            <>
                <span className='hw-breadcrumb'>
                    <a className='hw-link' href={href} title={title}>
                        {linktext}
                    </a>
                </span>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className='hw-breadcrumb__arrow'
                />
            </>
        )
    }

    function Desktop() {
        return (
            <>
                {crumbs &&
                    crumbs.map((crumb) => (
                        <Crumb
                            crumb={crumb}
                            key={crumb.linktext + crumb.href}
                        />
                    ))}
                <span className='hw-breadcrumb__current'>{current}</span>
            </>
        )
    }

    function Mobile({ crumb: { linktext, href, title } }) {
        return (
            <div className='hw-breadcrumb'>
                <a className='hw-link' href={href} title={title}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className='hw-breadcrumb__arrow-mobile'
                        size='xs'
                        width='10'
                    />
                    {linktext}
                </a>
            </div>
        )
    }

    /**
     * In case the crumbs are [] and showing on mobile
     * we should not show anything
     */
    function shouldShowAnything() {
        return desktop || (crumbs && crumbs.length > 0 && !desktop)
    }

    return shouldShowAnything() ? (
        <div className='hw-breadcrumbs'>
            {desktop && <Desktop />}
            {!desktop && <Mobile crumb={crumbs[crumbs.length - 1]} />}
        </div>
    ) : null
}

Breadcrumbs.propTypes = {
    crumbs: PropTypes.arrayOf(
        PropTypes.exact({
            linktext: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            title: PropTypes.string
        })
    ),
    current: PropTypes.string.isRequired
}
