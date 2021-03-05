import React from "react";
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';


export default function ErrorMessage({title, icon, children}) {
    return (
        <BaseMessage title={title} faIcon={icon ? faExclamationTriangle : false } variant='error' iconSize='lg'>
            {children}
        </BaseMessage>
    )
};

ErrorMessage.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.bool
};

ErrorMessage.defaultProps = {
    icon: true
}