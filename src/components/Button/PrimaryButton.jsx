import React from "react";
import PropTypes from 'prop-types';
import BaseButton from './BaseButton';

export default function PrimaryButton({type, size, onClick, disabled, children}) {

        return (
            <BaseButton variant="primary" type={type} size={size} disabled={disabled} onClick={onClick}>{children}</BaseButton>
            );

}

PrimaryButton.defaultProps = {
  disabled : false,
  type: 'button'
};

PrimaryButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  type : PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
};

