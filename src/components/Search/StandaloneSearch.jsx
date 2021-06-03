import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons'
import { SuggestionsProvider } from './SuggestionsContext'

export default function StandaloneSearch({
    label,
    buttonLabel,
    advancedSuggestions,
    onChange,
    onClick,
    children
}) {
    const suggestionsClass = advancedSuggestions
        ? ''
        : 'hw-search__suggestions--simple'

    return (
        <label className='hw-label'>
            {label}
            <div
                className='hw-search hw-search--standalone'
                data-hw-search
                data-hw-search-placeholders=''
            >
                <div className='hw-search__inner'>
                    <input
                        data-hw-search-input
                        className='hw-search__input'
                        type='text'
                        aria-label='Search'
                        onChange={onChange}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className='hw-search__icon'
                    />

                    <button
                        className='hw-search__button-inside'
                        data-hw-search-reset
                    >
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                </div>
                <SuggestionsProvider advancedSuggestions={advancedSuggestions}>
                    <ul
                        className={`hw-search__suggestions ${suggestionsClass}`}
                    >
                        {children}
                    </ul>
                </SuggestionsProvider>

                <button
                    type='submit'
                    onClick={onClick}
                    className='hw-button hw-button--primary hw-search__button'
                >
                    {buttonLabel}
                </button>
            </div>
        </label>
    )
}
StandaloneSearch.defaultProps = {
    advancedSuggestions: false
}

StandaloneSearch.propTypes = {
    label: PropTypes.string,
    buttonLabel: PropTypes.string,
    advancedSuggestions: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}
