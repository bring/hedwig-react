import React from "react";
import PropTypes from 'prop-types';
import { ExpandedProvider } from "./ExpandedContext";


export default function Accordion({ children, allowMultiple }) {

    return (
        <ul className="hw-accordion">
            <ExpandedProvider allowMultiple={ allowMultiple }>
                { children }
            </ExpandedProvider>
        </ul>
    )
}

Accordion.propTypes = {
    allowMultiple: PropTypes.bool
}

Accordion.defaultProps = {
    allowMultiple: true
}