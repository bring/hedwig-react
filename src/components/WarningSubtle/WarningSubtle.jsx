import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';

export default function WarningSubtle({ icon, children }) {
    return (
        <div className="hw-warning-subtle">
            { icon && <FontAwesomeIcon icon={ faExclamationTriangle } className="hw-warning-subtle__icon" /> }
            { children }
        </div>
    )
};
  
WarningSubtle.propTypes = {
    icon: PropTypes.bool
};

WarningSubtle.defaultProps = {
    icon: true
}
