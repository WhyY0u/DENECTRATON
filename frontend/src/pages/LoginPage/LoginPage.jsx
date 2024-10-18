import React from 'react'
import styles from './styles/LoginPage.module.css'
import Background from '../../components/BackgroundGlobal/Background'
import logo_background from '../../../public/images/Login/Background/logo_background.png'
import Header from '../../components/HeaderGlobal/Header'
import LoginForm from '../../components/Login/LoginForm/LoginForm'

function LoginPage() {
  return (
    <div className={styles.login__page}>
        <Background className={styles.login__background} src={logo_background}>
          <Header />
          <LoginForm />
        </Background>
    </div>
  ) 
}

export default LoginPage
