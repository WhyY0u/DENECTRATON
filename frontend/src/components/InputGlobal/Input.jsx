import React from 'react'
import styles from './styles/Input.module.css'

function Input(props) {

    const {
        name,
        type,
        value,
        onChange,
        onBlur,
        onFocus,
        className,
    } = props

  return (
    <input 
        className={`${className} ${styles.input}`}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
    />
  )
}

export default Input
