import React from 'react'
import RadioButton from './RadioButton'
import Fieldset from '../Fieldset/Fieldset'
import PropTypes from 'prop-types'

export default function RadioButtonGroup({
    options,
    name,
    label,
    defaultSelected,
    callBack,
    layout
}) {
    const radioButtons = options.map((option, index) => (
        <RadioButton
            label={option.label}
            value={option.value}
            name={name}
            onClick={(e) => callBack(e)}
            key={index}
            defaultChecked={option.value === defaultSelected}
        />
    ))

    return (
        <div className='hw-block hw-block--mb-medium-2'>
            <Fieldset legend={label} selectionControls={layout}>
                {radioButtons}
            </Fieldset>
        </div>
    )
}

RadioButtonGroup.defaultProps = {
    layout:[]
}

RadioButtonGroup.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    callBack: PropTypes.func,
    layout: PropTypes.arrayOf(
        PropTypes.oneOf(['bounding', 'full', 'horisontal'])
    )
}
