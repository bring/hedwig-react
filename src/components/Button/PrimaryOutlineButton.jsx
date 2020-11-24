import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class PrimaryOutlineButton extends React.Component {

    render() {
        return (
            <Button variant="outline-primary" size={this.props.size} disabled={this.props.disabled}>{this.props.children}</Button>
            );
    }

}

PrimaryOutlineButton.defaultProps = {
  size : 'small',
  disabled : false,
};

PrimaryOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
};

export default PrimaryOutlineButton;
