import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BaseMessage({title, faIcon, iconSize, variant, children}) {
    return (
        <div className={`hw-message ${variant ? 'hw-message--' + variant : ''}`}>
            {faIcon && <FontAwesomeIcon icon={faIcon} className="hw-message__icon" size={iconSize}/>}
            <div className="hw-message__body">
                {title && <h3 className="hw-message__title">{title}</h3>}
                {children}
            </div>
        </div>
    )
};
  
BaseMessage.propTypes = {
    title: PropTypes.string,
    faIcon: PropTypes.object,
    variant: PropTypes.oneOf(['error', 'subtle', 'subtle-light', 'subtle-error', ''])
};

BaseMessage.defaultProps = {
    iconSize: '1x',
    variant: ''
}
