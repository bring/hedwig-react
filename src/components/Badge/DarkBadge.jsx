import React from "react";
import PropTypes from 'prop-types';
import BaseBadge from './BaseBadge';

export default function DarkBadge(props) {
    return (
        <BaseBadge variant='dark' size={props.size}>
            {props.children}
        </BaseBadge>
    )
};
  
DarkBadge.propTypes = {
    size : PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
};