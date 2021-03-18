import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function Link({size, children}) {
    return(
        <BaseLink size={size}>{children}</BaseLink>
    );
};

Link.defaultProps = {
    size : ''
}

Link.propTypes = {
    size : PropTypes.oneOf(['small', 'big', '']),
}
