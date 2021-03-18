import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function SolidLink({size, children}) {
    return(
        <BaseLink type="solid" size={size}>{children}</BaseLink>
    );
};

SolidLink.defaultProps = {
    size : ''
  }
  
  SolidLink.propTypes = {
      size : PropTypes.oneOf(['small', 'big', '']),
  }