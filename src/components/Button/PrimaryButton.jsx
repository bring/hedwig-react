import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class PrimaryButton extends React.Component {

    render() {
        return (
            <Button variant="primary" size={this.props.size} disabled={this.props.disabled}>{this.props.children}</Button>
            );
    }

}

PrimaryButton.defaultProps = {
  size : 'small',
  disabled : false,
};

PrimaryButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
};

export default PrimaryButton;
