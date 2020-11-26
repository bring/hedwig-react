import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class PrimaryOutlineButton extends React.Component {

    render() {
        return (
            <Button variant="outline-primary" type={this.props.type} size={this.props.size} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</Button>
            );
    }

}

PrimaryOutlineButton.defaultProps = {
  size : 'small',
  disabled : false,
  type: 'button'
};

PrimaryOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
  type : PropTypes.oneOf(['button', 'submit']),
};

export default PrimaryOutlineButton;
