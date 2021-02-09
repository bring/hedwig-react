import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


//Buttons
export { default as PrimaryButton } from './components/Button/PrimaryButton.jsx'
export { default as SecondaryButton } from './components/Button/SecondaryButton.jsx'
export { default as PrimaryOutlineButton } from './components/Button/PrimaryOutlineButton.jsx'
export { default as SecondaryOutlineButton } from './components/Button/SecondaryOutlineButton.jsx'
export { default as LightOutlineButton } from './components/Button/LightOutlineButton.jsx'
export { default as Dropdown } from './components/Dropdown/Dropdown.jsx'
export { default as WhiteDropdown } from './components/Dropdown/WhiteDropdown.jsx'

export { default as Badge } from './components/Badge/Badge.jsx'
export { default as DarkBadge } from './components/Badge/DarkBadge.jsx'
export { default as WarningBadge } from './components/Badge/WarningBadge.jsx'
export { default as WhiteBadge } from './components/Badge/WhiteBadge.jsx'


export { default as Card } from './components/Card/Card.jsx'
