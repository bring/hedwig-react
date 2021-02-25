import React from "react";
import PropTypes from 'prop-types';

export default function Flex({ gutterMobile, gutterDesktop, wrap, variableHeight, children }) {
    let classes = ['hw-flex'];
    if(gutterMobile) classes.push(`hw-flex--gutter-${gutterMobile}-mobile`);
    if(gutterDesktop) classes.push(`hw-flex--gutter-${gutterDesktop}-desktop`);
    if(wrap) classes.push(`hw-flex--${wrap}`);
    if(variableHeight) classes.push('hw-flex--variable-height');

    return (
        <div className={classes.join(' ')}>{ children }</div>
    )
};


Flex.propTypes = {
    gutterMobile: PropTypes.oneOf([ 'large', 'larger', 'largest' ]),
    gutterDesktop: PropTypes.oneOf([ 'medium', 'large', 'larger', 'largest' ]),
    wrap: PropTypes.oneOf([ 'twos', 'thirds', 'fourths']),
    variableHeight: PropTypes.bool
};
