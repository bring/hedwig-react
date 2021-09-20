import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/pro-regular-svg-icons'

export default function Trace({
    buttonLabel,
    ariaLabel,
    placeholder,
    onChange,
    children
}) {

    const [inputValue, setInputValue] = useState('')
    const [hasValue, setHasValue] = useState(false)

    function handleInput(e) {
        console.log("handle input")
        
        if (e.target.value) {
            setHasValue(true)
        } else {
            setHasValue(false)
        }
    }

    function reset() {
        console.log("reset")
    }

    return (
        <div class="hw-trace hw-trace" 
        data-hw-trace 
        >
        <div class="hw-trace__inner">
          <input class="hw-trace__input" type="text" value={inputValue} onChange={(e) => handleInput(e)} placeholder={placeholder} />
          <span class="hw-trace__placeholder"></span>
          <button type="button" className='hw-trace__button-inside'
          onClick={reset()}>
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className='hw-search__icon'
                    />
                </button>
        </div>
          <button type="submit" class="hw-button hw-button--primary hw-trace__button">{buttonLabel}</button>
      </div>
    )
}


