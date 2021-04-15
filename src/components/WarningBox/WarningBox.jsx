import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';

export default function WarningBox({title, icon, children}) {
    return (
        <div className="hw-warning-box">
            { icon && <FontAwesomeIcon icon={faExclamationTriangle} className="hw-warning-box__icon" size="lg" /> }
            <div className="hw-warning-box__body">
                {title && <h3 className="hw-warning-box__title">{title}</h3>}
                {children}
            </div>
        </div>
    )
};
  
WarningBox.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.bool
};

WarningBox.defaultProps = {
    icon: true
}
