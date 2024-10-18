import React from 'react'
import styles from './styles/Header.module.css'
import dissimilate from '../../../public/images/HeaderGlobal/dissimilate.svg'

function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.header__container} _container`}>
        <img className={styles.header__img} src={dissimilate} alt="" />
        <h1 className={styles.header__title}>Dissimilate</h1>
      </div>
    </div>
  )
}

export default Header
