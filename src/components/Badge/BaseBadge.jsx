import React from "react";
import PropTypes from 'prop-types';

export default function BaseBadge(props) {
    return (
        <span className={`hw-badge ${props.size ? 'hw-badge--' + props.size : ''} ${props.variant ? 'hw-badge--' + props.variant : ''}`}>
            {props.children}
        </span>
    )
};
  
BaseBadge.propTypes = {
    variant : PropTypes.oneOf(['dark', 'white','warning']),
    size : PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
  };