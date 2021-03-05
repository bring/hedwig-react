import React from "react";
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';
import { faInfoSquare } from '@fortawesome/pro-solid-svg-icons';


export default function SubtleMessage({icon, children}) {
    return (
        <BaseMessage faIcon={icon ? faInfoSquare : false } variant='subtle'>
            {children}
        </BaseMessage>
    )
};

SubtleMessage.propTypes = {
    icon: PropTypes.bool
};

SubtleMessage.defaultProps = {
    icon: true
}