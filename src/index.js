import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


//Buttons
export { default as Button } from './components/Button/Button.jsx'
export { default as PrimaryButton } from './components/Button/PrimaryButton.jsx'
export { default as SecondaryButton } from './components/Button/SecondaryButton.jsx'
export { default as PrimaryOutlineButton } from './components/Button/PrimaryOutlineButton.jsx'
export { default as SecondaryOutlineButton } from './components/Button/SecondaryOutlineButton.jsx'


export { default as Card } from './components/Card/Card.jsx'
