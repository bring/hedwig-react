import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class SecondaryOutlineButton extends React.Component {

    render() {
        return (
            <Button variant="outline-secondary" type={this.props.type} size={this.props.size} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</Button>
            );
    }

}

SecondaryOutlineButton.defaultProps = {
  size : 'small',
  disabled : false,
  type: 'button'
};

SecondaryOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
  type : PropTypes.oneOf(['button', 'submit']),
};

export default SecondaryOutlineButton;
