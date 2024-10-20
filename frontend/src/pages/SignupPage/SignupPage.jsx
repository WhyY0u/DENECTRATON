import React from 'react'
import styles from './styles/SignupPage.module.css'
import Background from '../../components/BackgroundGlobal/Background'
import logo_background from '../../../public/images/Background/logo_background.png'
import Header from '../../components/HeaderGlobal/Header'
import SignupButtonGlobal from '../../components/SignupButtonGlobal/SignupButtonGlobal'
import UnsignedinGlobal from '../../components/UnsignedinGlobal/UnsignedinGlobal'
import SignupForm from '../../components/SignupForm/SignupForm'
import { useState } from 'react'
import Email from '../../components/Email/Email'
function SignupPage() {
  const [open,setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <div className={styles.signup__page}>
      <Background className={open ? styles.blur : ''} src={logo_background}>
      {open ? (
        <Email title={'Код отправлен'} subtitle={'на почту aimsi13579@gmail.com'} btntitle={'Confirm'} />
          ) : (
            <>
              <Header />
              <SignupForm handleOpen={handleOpen} />
              <UnsignedinGlobal
                className={styles.signup__page__unsigned}
                to={'/login'}
                title={'Already have an account?'}
                subtitle={'Sign in to Dissmilate and find job, projects and talents in one place.'}
                btntitle={'Sign In'}
              />
            </>
    )}
      </Background>
    </div>
  )
}

export default SignupPage
