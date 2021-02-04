import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

export default function SecondaryButton({type, size, onClick, disabled, children}) {

        return (
            <Button variant="secondary" type={type} size={size} disabled={disabled} onClick={onClick}>{children}</Button>
            );

}

SecondaryButton.defaultProps = {
  disabled : false,
  type: 'button'
};

SecondaryButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
  type : PropTypes.oneOf(['button', 'submit']),
};

