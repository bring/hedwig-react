import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function InvertedLink({href, size, children}) {
    return(
        <BaseLink href={href} type="inverted" size={size}>{children}</BaseLink>
    );
};

InvertedLink.defaultProps = {
    size : ''
}

InvertedLink.propTypes = {
    href: PropTypes.string,
    size : PropTypes.oneOf(['small', 'big', '']),
}
