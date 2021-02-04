import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

export default function LightOutlineButton({type, size, onClick, disabled, children}) {


        return (
            <Button variant="outline-white" type={type} size={size} disabled={disabled} onClick={onClick}>{children}</Button>
            );


}

LightOutlineButton.defaultProps = {
  disabled : false,
  type: 'button'
};

LightOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
  type : PropTypes.oneOf(['button', 'submit']),
};

