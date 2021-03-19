import React, { useState } from "react";
import Item from './Item';
//import PropTypes from 'prop-types';


export default function Accordion({ items }) {

    return (
        <ul className="hw-accordion">
            { items.map(item => <Item item={ item } key={ item.title } />) }
        </ul>
    )
}