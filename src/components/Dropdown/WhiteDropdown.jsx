import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

export default function WhiteDropdown({options}) {
   return (
            <Dropdown variant="white" options={options}/>
            );
}
