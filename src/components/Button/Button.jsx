import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

class Button extends React.Component {

  render() {
    const buttonVariant = this.props.variant != "" ? "hw-button--"+this.props.variant : "";
    const buttonColor = this.props.color ? "hw-button--"+this.props.color : "";


    return (
      <button
      type={this.props.type}
      className={`hw-button ${buttonVariant} ${buttonColor}`}
      onClick= {this.props.onClick}
      disabled= {this.props.isDisabled}

      >{this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  variant : "",
  color : "primary",
  type : 'button',
  isDisabled : false,
};

Button.propTypes = {
  color : PropTypes.oneOf(['primary', 'secondary']),
  variant : PropTypes.oneOf(['', 'outlined']),
  type : PropTypes.oneOf(['button', 'submit']),
};


export default Button;
