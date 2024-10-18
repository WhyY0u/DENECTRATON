import React from 'react'
import styles from './styles/UnsignedinGlobal.module.css'
function UnsignedinGlobal({title,subtitle,btntitle,className}) {
  return (
    <div className={styles.unsignedin}>
        <div className={styles.unsignedin__title}>
            {title}
        </div>
        <div className={styles.unsignedin__subtitle}>
        {subtitle}
        </div>
        <button className={styles.unsignedin__btn}>
            {btntitle}
        </button>
    </div>
  )
}

export default UnsignedinGlobal