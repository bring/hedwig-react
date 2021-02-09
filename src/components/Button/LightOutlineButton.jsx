import React from "react";
import PropTypes from 'prop-types';
import BaseButton from './BaseButton';

export default function LightOutlineButton({type, size, onClick, disabled, children}) {


        return (
            <BaseButton variant="outline-white" type={type} size={size} disabled={disabled} onClick={onClick}>{children}</BaseButton>
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

