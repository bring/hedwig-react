import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class PrimaryButton extends React.Component {

    render() {
        return (
            <Button variant="primary" type={this.props.type} size={this.props.size} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</Button>
            );
    }

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

export default PrimaryButton;
