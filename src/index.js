import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Button } from './components/Button/Button.jsx'
export { default as PrimaryButton } from './components/Button/PrimaryButton.jsx'
export { default as SecondaryButton } from './components/Button/SecondaryButton.jsx'
export { default as Card } from './components/Card/Card.jsx'
