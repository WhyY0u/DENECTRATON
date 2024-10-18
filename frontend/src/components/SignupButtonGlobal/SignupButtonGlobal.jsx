import React from 'react'
import styles from './styles/SignupButtonGlobal.module.css'
function SignupButtonGlobal({title,className}) {
  return (
    <button className={`${styles.signupbutton} ${className}`}>
    {title}
  </button>
  )
}

export default SignupButtonGlobal
