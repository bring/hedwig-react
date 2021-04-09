import React from "react";
import PropTypes from 'prop-types';
import { ExpandedProvider } from "./ExpandedContext";


export default function Accordion({ children, allowMultiple }) {


    children.forEach( child => {
        if(!child.type || !child.type.displayName || child.type.displayName != 'AccordionItem') {
            console.error('Only children of type "AccordionItem" are allowed inside an Accordion. The offending child is on the next line:');
            console.error(child);
        }
    });

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