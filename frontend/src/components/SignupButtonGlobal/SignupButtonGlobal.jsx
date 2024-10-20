import React from 'react'
import styles from './styles/SignupButtonGlobal.module.css'
function SignupButtonGlobal(props) {

  const {
    title,
    className,
    type,
    onClick,
  } = props

  return (
    <button type={type} onClick={onClick} className={`${styles.signupbutton} ${className}`}>
    {title}
  </button>
  )
}

export default SignupButtonGlobal
