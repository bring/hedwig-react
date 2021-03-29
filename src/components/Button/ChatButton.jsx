import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsAlt } from '@fortawesome/pro-solid-svg-icons'

export default function ChatButton({ fixed, onClick, disabled, ariaControl }) {
  let chatVariant = fixed ? 'chat-fixed' : 'chat'
  return (
    <BaseButton
      variant={chatVariant}
      type='button'
      disabled={disabled}
      ariaControl={ariaControl}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faCommentsAlt} className='' size='2x' />
    </BaseButton>
  )
}

ChatButton.defaultProps = {
  fixed: false,
  disabled: false
}

ChatButton.propTypes = {
  fixed: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaControl: PropTypes.string
}
