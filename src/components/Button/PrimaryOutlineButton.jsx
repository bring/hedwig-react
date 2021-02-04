import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

export default function PrimaryOutlineButton({type, size, onClick, disabled, children}) {

        return (
            <Button variant="outline-primary" type={type} size={size} disabled={disabled} onClick={onClick}>{children}</Button>
            );

}

PrimaryOutlineButton.defaultProps = {
  disabled : false,
  type: 'button'
};

PrimaryOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
  type : PropTypes.oneOf(['button', 'submit']),
};

