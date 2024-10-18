import React from 'react'
import styles from './styles/SignupPage.module.css'
import Background from '../../components/BackgroundGlobal/Background'
import logo_background from '../../../public/images/Login/Background/logo_background.png'
import Header from '../../components/HeaderGlobal/Header'
import SignupButtonGlobal from '../../components/SignupButtonGlobal/SignupButtonGlobal'
import UnsignedinGlobal from '../../components/UnsignedinGlobal/UnsignedinGlobal'
import SignupForm from '../../components/SignupForm/SignupForm'
function SignupPage() {
  return (
    <div className={styles.signup__page}>
      <Background className={styles.login__background} src={logo_background}>
      <Header />
      <SignupForm/>
      <UnsignedinGlobal 
        className={styles.signup__page__unsigned}
        to={'/login'}
        title={'Already have an account?'} 
        subtitle={'Sign in to Dissmilate and find job,projects and talents in one place.'} 
        btntitle={'Sign In'}
      />
      </Background>
    </div>
  )
}

export default SignupPage
