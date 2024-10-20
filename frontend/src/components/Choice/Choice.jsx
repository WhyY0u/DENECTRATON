import React from 'react'
import UnsignedinGlobal from '../UnsignedinGlobal/UnsignedinGlobal'
import styles from './styles/Choice.module.css'
const Choice = () => {
  return (
    <div className={styles.choice}>
        <div className={styles.title}>Who are you?</div>
        <UnsignedinGlobal className={styles.slideLeft} title={'Employer'} subtitle={'Sign in to Dissmilate and find job,projects and talents in one place.'} btntitle={'Choose'}/>
        <UnsignedinGlobal className={`${styles.marginTop} ${styles.slideRight}`} title={'Executor'} subtitle={'Sign in to Dissmilate and find job,projects and talents in one place.'} btntitle={'Choose'}/>
    </div>
  )
}

export default Choice
