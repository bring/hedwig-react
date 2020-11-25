import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class SecondaryButton extends React.Component {

    render() {
        return (
            <Button variant="secondary" size={this.props.size} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</Button>
            );
    }

}

SecondaryButton.defaultProps = {
  size : 'small',
  disabled : false,
};

SecondaryButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
};

export default SecondaryButton;
