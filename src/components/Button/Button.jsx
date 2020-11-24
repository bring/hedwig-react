import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {

  render() {
    var buttonVariant = this.props.variant != "" ? "hw-button--"+this.props.variant : "";
    const buttonSize = this.props.size ? "hw-button--"+this.props.size : "";


    return (
      <button
      type={this.props.type}
      className={`hw-button ${buttonVariant} ${buttonSize}`}
      onClick= {this.props.onClick}
      disabled= {this.props.disabled}

      >{this.props.children}
      </button>
    );
  }
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
};


export default Button;

