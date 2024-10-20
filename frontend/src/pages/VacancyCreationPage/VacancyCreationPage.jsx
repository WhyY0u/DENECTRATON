import React from 'react'
import styles from './styles/VacancyCreationPage.module.css'
import Background from '../../components/BackgroundGlobal/Background'
import background_logo from '../../../public/images/Background/logo_background.png'

function VacancyCreationPage() {
  return (
    <div className={styles.vacancy__creation__page}>
        <Background src={background_logo}>
            
        </Background>
    </div>
  )
}

export default VacancyCreationPage
