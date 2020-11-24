import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {

  render() {
    var buttonVariant = this.props.variant != "" ? "hw-button--"+this.props.variant : "";
    const buttonColor = (this.props.color && this.props.variant == '') ? "hw-button--"+this.props.color : "";
    const buttonSize = this.props.size ? "hw-button--"+this.props.size : "";


    return (
      <button
      type={this.props.type}
      className={`hw-button ${buttonVariant} ${buttonColor} ${buttonSize}`}
      onClick= {this.props.onClick}
      disabled= {this.props.disabled}

      >{this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  variant : "",
  color : "",
  type : 'button',
  disabled : false,
};

Button.propTypes = {
  color : PropTypes.oneOf(['primary', 'secondary']),
  variant : PropTypes.oneOf(['', 'outline-primary','outline-secondary', 'outline-white']),
  type : PropTypes.oneOf(['button', 'submit']),
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
};


export default Button;

