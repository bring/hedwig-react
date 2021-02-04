import React from "react";
import PropTypes from 'prop-types';

export default function Button({variant, type, size, onClick, disabled, children}) {
    const buttonVariant = variant != "" ? "hw-button--"+variant : "";
    const buttonSize = size ? "hw-button--"+size : "";

    return (
      <button
      type={type}
      className={`hw-button ${buttonVariant} ${buttonSize}`}
      onClick= {onClick}
      disabled= {disabled}

      >{children}
      </button>
    );

}

Button.defaultProps = {
  variant : "",
  type : 'button',
  disabled : false,
};

Button.propTypes = {
  variant : PropTypes.oneOf(['', 'primary', 'secondary', 'outline-primary','outline-secondary', 'outline-white']),
  type : PropTypes.oneOf(['button', 'submit']),
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
};




