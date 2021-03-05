import React from "react";
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';
import { faInfoSquare } from '@fortawesome/pro-solid-svg-icons';


export default function SubtleLightMessage({icon, children}) {
    return (
        <BaseMessage faIcon={icon ? faInfoSquare : false } variant='subtle-light'>
            {children}
        </BaseMessage>
    )
};

SubtleLightMessage.propTypes = {
    icon: PropTypes.bool
};

SubtleLightMessage.defaultProps = {
    icon: true
}