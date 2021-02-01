import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

export default function Dropdown({label, name, variant, id, selected, onChange, options}) {

  const variantClass = variant != "" ? "hw-dropdown--"+variant : "";
        var items = '';
        if (options) {
           items = options.map((item, index) =>
            <option value={item.value} key={index}>{item.label}</option>

            );
        }

   return (
            <label className="hw-label">
            {label}
            <select
            name={name}
            className={`hw-dropdown hw-dropdown--native ${variantClass}`}
            id={id}
            value={selected}
            data-hw-dropdown={id}
            onChange={onChange}
            >
            {items}
            </select>
            </label>

            );
}

Dropdown.defaultProps = {
    variant : "",
    options : []
};

Dropdown.propTypes = {
    variant : PropTypes.oneOf(['', 'white']),
};


