import React from "react";
import PropTypes from 'prop-types';
import BaseBadge from './BaseBadge';

export default function WhiteBadge(props) {
    return (
        <BaseBadge variant='white' size={props.size}>
            {props.children}
        </BaseBadge>
    )
};
  
WhiteBadge.propTypes = {
    size : PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
};