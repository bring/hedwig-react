import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class PrimaryButton extends React.Component {

    render() {
        return (
            <Button color="primary" size={this.props.size} disabled={this.props.isDisabled}>{this.props.children}</Button>
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
