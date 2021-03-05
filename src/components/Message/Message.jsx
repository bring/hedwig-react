import React from "react";
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';
import { faInfoSquare } from '@fortawesome/pro-solid-svg-icons';


export default function Message({title, icon, children}) {
    return (
        <BaseMessage title={title} faIcon={icon ? faInfoSquare : false } iconSize='lg'>
            {children}
        </BaseMessage>
    )
};

Message.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.bool
};

Message.defaultProps = {
    icon: true
}