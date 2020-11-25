import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class SecondaryOutlineButton extends React.Component {

    render() {
        return (
            <Button variant="outline-secondary" size={this.props.size} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</Button>
            );
    }

}

SecondaryOutlineButton.defaultProps = {
  size : 'small',
  disabled : false,
};

SecondaryOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
};

export default SecondaryOutlineButton;
