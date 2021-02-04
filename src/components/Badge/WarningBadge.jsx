import React from "react";
import PropTypes from 'prop-types';
import BaseBadge from './BaseBadge';

export default function WarningBadge(props) {
    return (
        <BaseBadge variant='warning' size={props.size}>
            {props.children}
        </BaseBadge>
    )
};
  
WarningBadge.propTypes = {
    size : PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
};