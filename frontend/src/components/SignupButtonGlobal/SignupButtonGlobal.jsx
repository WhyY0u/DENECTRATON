import React from 'react'
import styles from './styles/SignupButtonGlobal.module.css'
function SignupButtonGlobal({title,className,onClick}) {
  return (
    <button onClick={onClick} className={`${styles.signupbutton} ${className}`}>
    {title}
  </button>
  )
}

export default SignupButtonGlobal
