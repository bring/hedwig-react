import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';

class LightOutlineButton extends React.Component {

    render() {
        return (
            <Button variant="outline-white" size={this.props.size} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</Button>
            );
    }

}

LightOutlineButton.defaultProps = {
  size : 'small',
  disabled : false,
};

LightOutlineButton.propTypes = {
  size : PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
  onClick: PropTypes.func,
};

export default LightOutlineButton;
