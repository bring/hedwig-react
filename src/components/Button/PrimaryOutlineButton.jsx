import React from "react";
import PropTypes from 'prop-types';
import BaseButton from './BaseButton';

export default function PrimaryOutlineButton({type, size, onClick, disabled, children}) {

        return (
            <BaseButton variant="outline-primary" type={type} size={size} disabled={disabled} onClick={onClick}>{children}</BaseButton>
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

