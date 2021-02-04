import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

export default function SecondaryOutlineButton({type, size, onClick, disabled, children}) {

        return (
            <Button variant="outline-secondary" type={type} size={size} disabled={disabled} onClick={onClick}>{children}</Button>
            );


}

SecondaryOutlineButton.defaultProps = {
  disabled : false,
  type: 'button'
};

SecondaryOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
  type : PropTypes.oneOf(['button', 'submit']),
};

