import React from 'react'
import styles from './styles/SignupPage.module.css'
import Background from '../../components/BackgroundGlobal/Background'
import logo_background from '../../../public/images/Login/Background/logo_background.png'
import Header from '../../components/HeaderGlobal/Header'
import SignupButtonGlobal from '../../components/SignupButtonGlobal/SignupButtonGlobal'
import UnsignedinGlobal from '../../components/UnsignedinGlobal/UnsignedinGlobal'
function SignupPage() {
  return (
    <div>
      <Background className={styles.login__background} src={logo_background} />
      <Header />
      <SignupButtonGlobal title={'Sign Up'}/>
      <UnsignedinGlobal title={'Already have an account?'} subtitle={'Sign in to Dissmilate and find job,projects and talents in one place.'} btntitle={'Sign Up'}/>
    </div>
  )
}

export default SignupPage
