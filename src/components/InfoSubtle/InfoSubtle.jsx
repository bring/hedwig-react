import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoSquare } from '@fortawesome/pro-solid-svg-icons';

export default function InfoSubtle({icon, light, children}) {
    return (
        <div className={`hw-info-subtle ${light ? 'hw-info-subtle--light' : ''}`}>
            { icon && <FontAwesomeIcon icon={faInfoSquare} className="hw-info-subtle__icon" /> }
            {children}
        </div>
    )
};
  
InfoSubtle.propTypes = {
    icon: PropTypes.bool,
    light: PropTypes.bool
};

InfoSubtle.defaultProps = {
    icon: true,
    light: false
}
