import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function InvertedLink({size, children}) {
    return(
        <BaseLink type="inverted" size={size}>{children}</BaseLink>
    );
};

InvertedLink.defaultProps = {
    size : ''
}

InvertedLink.propTypes = {
    size : PropTypes.oneOf(['small', 'big', '']),
}
