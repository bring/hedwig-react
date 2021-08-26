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

    function Crumb({ crumb }) {
        return (
            <>
                <span className='hw-breadcrumb'>
                    <a className='hw-link' href={crumb.href}>
                        {crumb.title}
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
                {crumbs.map((crumb) => (
                    <Crumb crumb={crumb} key={crumb.title + crumb.href} />
                ))}
                <span className='hw-breadcrumb__current'>{current}</span>
            </>
        )
    }

    function Mobile({ crumb }) {
        return (
            <div className='hw-breadcrumb'>
                <a className='hw-link' href={crumb.href}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className='hw-breadcrumb__arrow-mobile'
                        size='xs'
                        width='10'
                    />
                    {crumb.title}
                </a>
            </div>
        )
    }

    return (
        <div className='hw-breadcrumbs'>
            {desktop && <Desktop />}
            {!desktop && <Mobile crumb={crumbs[crumbs.length - 1]} />}
        </div>
    )
}

Breadcrumbs.propTypes = {
    crumbs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            href: PropTypes.string
        })
    ),
    current: PropTypes.string.isRequired
}
