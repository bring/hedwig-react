import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

class Dropdown extends React.Component {

    render() {

        const variant = this.props.variant != "" ? "hw-dropdown--"+this.props.variant : "";
        var items = '';
        if (this.props.options) {
           items = this.props.options.map((item, index) =>
            <option value={item.value} key={index}>{item.label}</option>

            );
        }


        return (
            <label className="hw-label">
            {this.props.label}
            <select
            name={this.props.name}
            className={`hw-dropdown hw-dropdown--native ${variant}`}
            id={this.props.id}
            value={this.props.selected}
            data-hw-dropdown={this.props.id}
            onChange={this.props.onChange}
            >
            {items}
            </select>
            </label>

            );
    }
}

Dropdown.defaultProps = {
    variant : ""
};

Dropdown.propTypes = {
    variant : PropTypes.oneOf(['', 'white']),
};


export default Dropdown;
