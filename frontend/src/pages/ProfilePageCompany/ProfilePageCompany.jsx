import React from 'react'
import styles from './styles/ProfilePageCompany.module.css'
import Background from '../../components/BackgroundGlobal/Background'
import AboutCompany from '../../components/ProfilePageCompanyComponents/AboutCompany/AboutCompany'
import logo_background from '../../../public/images/Background/logo_background.png'
import NewsForCompany from '../../components/ProfilePageCompanyComponents/NewsForCompany/NewsForCompany'
import ReviewsCompany from '../../components/ProfilePageCompanyComponents/ReviewsCompany/ReviewsCompany'

function ProfilePageCompany() {
  return (
    <div className={styles.profile__page__company}>
        <Background className={styles.profile__page__company__background} src={logo_background}>
            <AboutCompany />
            <NewsForCompany />
            <ReviewsCompany />
        </Background>
    </div>
  )
}

export default ProfilePageCompany
