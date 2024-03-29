import React from 'react'
import PropTypes from 'prop-types'
import BaseDropdown from './BaseDropdown'

export default function Dropdown({
    label,
    name,
    variant,
    id,
    selected,
    onChange,
    options,
    errorMessage,
    ariaControls
}) {
    return (
        <BaseDropdown
            variant={variant}
            label={label}
            name={name}
            id={id}
            selected={selected}
            onChange={onChange}
            options={options}
            errorMessage={errorMessage}
            ariaControls={ariaControls}
        />
    )
}

Dropdown.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(['', 'white', 'line']),
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    ariaControls: PropTypes.string
}
