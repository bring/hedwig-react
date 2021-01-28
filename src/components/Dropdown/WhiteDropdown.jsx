import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class WhiteDropdown extends React.Component {

    render() {



        return (
            <Dropdown variant="white" options={this.props.options}/>
            );
    }
}



export default WhiteDropdown;
