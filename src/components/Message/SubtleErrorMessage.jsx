import React from "react";
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';


export default function SubtleErrorMessage({icon, children}) {
    return (
        <BaseMessage faIcon={icon ? faExclamationTriangle : false } variant='subtle-error'>
            {children}
        </BaseMessage>
    )
};

SubtleErrorMessage.propTypes = {
    icon: PropTypes.bool
};

SubtleErrorMessage.defaultProps = {
    icon: true
}
