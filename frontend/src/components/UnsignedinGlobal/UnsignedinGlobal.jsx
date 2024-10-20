import React from 'react'
import styles from './styles/UnsignedinGlobal.module.css'
import { Link } from 'react-router-dom'
function UnsignedinGlobal(props) {

  const {
    title,
    subtitle,
    btntitle,
    to,
    className,
  } = props

  return (
      <div className={`${styles.unsignedin} ${className}`}>
          <div className={styles.unsignedin__title}>
              {title}
          </div>
          <div className={styles.unsignedin__subtitle}>
          {subtitle}
          </div>
          <Link to={to}>
            <button className={styles.unsignedin__btn}>
                {btntitle}
            </button>
          </Link>
      </div>
  )
}

export default UnsignedinGlobal