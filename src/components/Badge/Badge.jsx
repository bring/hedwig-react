import React from "react";
import PropTypes from 'prop-types';
import BaseBadge from './BaseBadge';

export default function Badge(props) {
    return (
        <BaseBadge size={props.size}>
            {props.children}
        </BaseBadge>
    )
};


  
Badge.propTypes = {
    size : PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
};