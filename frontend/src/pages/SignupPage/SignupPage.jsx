import React from 'react'
import styles from './styles/SignupPage.module.css'
import SignupButton from '../../components/Signup/SignupButton/SignupButton'
import Unsignedin from '../../components/Signup/Unsignedin/Unsignedin'
function SignupPage() {
  return (
    <div>
      <SignupButton/>
      <Unsignedin/>
    </div>
  )
}

export default SignupPage
