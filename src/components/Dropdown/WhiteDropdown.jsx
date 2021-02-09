import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

export default function WhiteDropdown({ label, name, id, selected, onChange, options}) {
  return (
    <Dropdown variant="white" label={label} id={id} selected={selected} onChange={onChange} options={options} />
            );
}
