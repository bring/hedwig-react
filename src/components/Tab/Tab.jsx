import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export default function Tab({ items, selected, onClick }) {
    const [selectedItem, setSelectedItem] = useState(selected)
    const selectedRef = useRef()
    const markerRef = useRef()
    const tabRef = useRef()

    useEffect(() => {
        if (selectedRef.current) {
            const itemProperties = selectedRef.current.getBoundingClientRect()
            markerRef.current.style.left =
                itemProperties.left -
                tabRef.current.getBoundingClientRect().left +
                tabRef.current.scrollLeft +
                'px'
            markerRef.current.style.width = itemProperties.width + 'px'
            horizontalScroll(
                tabRef.current,
                selectedRef.current.offsetLeft -
                    tabRef.current.clientWidth / 2 +
                    selectedRef.current.clientWidth / 2
            )
        } else {
            markerRef.current.style.width = 0
        }
    }, [selectedItem])

    function horizontalScroll(containerEl, x) {
        if (containerEl.scroll) {
            containerEl.scroll({ behavior: 'smooth', left: x, top: 0 })
        } else {
            containerEl.scrollLeft = x
        }
    }

    function handleClick(id) {
        onClick(id)
        setSelectedItem(id)
    }

    function Item({ id, content }) {
        return (
            <a
                className='hw-tab__item'
                ref={selectedItem === id ? selectedRef : null}
                onClick={() => handleClick(id)}
            >
                {content}
            </a>
        )
    }

    return (
        <div className='hw-tab' ref={tabRef}>
            {items.map((item) => (
                <Item key={item.id} id={item.id} content={item.content} />
            ))}
            <div className='hw-tab__marker' ref={markerRef}></div>
        </div>
    )
}

Tab.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            content: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
                .isRequired,
            selected: PropTypes.string
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
}
