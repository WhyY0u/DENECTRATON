import React from 'react'
import styles from './styles/InputLittleGlobal.module.css'

function InputLittleGlobal(props) {

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
        className={`${className} ${styles.inputlittleglobal}`}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
    />
  )
}

export default InputLittleGlobal
