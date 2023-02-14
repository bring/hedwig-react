import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons'

export default function Trace({
    buttonLabel,
    ariaLabel,
    placeholder,
    onChange
}) {
    const [inputValue, setInputValue] = useState('')
    const [hasValue, setHasValue] = useState(false)

    let classes = ''
    if (hasValue) {
        classes = ' hw-trace--hasvalue'
    }

    function handleInput(e) {
        if (e.target.value) {
            setHasValue(true)
        } else {
            setHasValue(false)
        }
        setInputValue(e.target.value)
    }

    function reset() {
        setInputValue('')
    }

    return (
        <div className={'hw-trace hw-trace' + classes}>
            <div className='hw-trace__inner'>
                <input
                    className='hw-trace__input '
                    type='text'
                    value={inputValue}
                    onChange={(e) => {
                        handleInput(e)
                        onChange(e)
                    }}
                    placeholder={placeholder}
                    aria-label={ariaLabel}
                />
                <button
                    type='button'
                    className='hw-trace__button-inside'
                    onClick={reset}
                >
                    {' '}
                    <FontAwesomeIcon icon={faTimesCircle} className='' />
                </button>
            </div>
            <button
                type='submit'
                className='hw-button hw-button--primary hw-trace__button'
            >
                {buttonLabel}
            </button>
        </div>
    )
}

Trace.propTypes = {
    ariaLabel: PropTypes.string,
    placeholder: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

Trace.defaultProps = {
    onChange: () => {}
}
