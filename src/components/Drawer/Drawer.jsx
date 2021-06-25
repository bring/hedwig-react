import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'

export default function Drawer({ open, children, closeTitle, closeCallback }) {
    const [closing, setClosing] = useState(false)
    const drawerRef = useRef()

    useEffect(() => {
        if (drawerRef.current && !closing) {
            drawerRef.current.classList.add('hw-drawer--open')
        }
    })

    function handleClose() {
        setClosing(true)
        closeCallback()
    }

    return (
        (open || closing) && (
            <div
                className={`hw-drawer${
                    closing ? ' hw-drawer--open hw-drawer--animate-out' : ''
                }`}
                ref={drawerRef}
            >
                <div
                    className='hw-drawer__overlay hw-animate hw-animate--fade-in-overlay'
                    onClick={handleClose}
                />
                <div
                    className={`hw-drawer__content${
                        closing ? ' hw-drawer__content--animate-out' : ''
                    }`}
                    onTransitionEnd={() => {
                        if (closing) setClosing(false)
                    }}
                >
                    <div className='hw-drawer__header'>
                        <div className='hw-drawer__close'>
                            <button
                                className='hw-drawer__close-button'
                                onClick={handleClose}
                            >
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    size='3x'
                                    title={closeTitle}
                                />
                            </button>
                        </div>
                    </div>
                    <div className='hw-drawer__body'>{children}</div>
                </div>
            </div>
        )
    )
}
