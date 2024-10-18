import React from 'react'
import styles from './styles/Unsignedin.module.css'
function Unsignedin() {
  return (
    <div className={styles.unsignedin}>
        <div className={styles.unsignedin__title}>
        Already have an account?
        </div>
        <div className={styles.unsignedin__subtitle}>
        Sign in to Dissmilate and find job,projects and talents in one place.
        </div>
        <button className={styles.unsignedin__btn}>
        Sign In
        </button>
    </div>
  )
}

export default Unsignedin
