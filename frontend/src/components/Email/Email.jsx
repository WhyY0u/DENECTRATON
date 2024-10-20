import React, { useState } from 'react'
import styles from './styles/Email.module.css'
import { Link } from 'react-router-dom'
import Choice from '../../components/Choice/Choice'

const Email = (props) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const {
    title,
    subtitle,
    btntitle,
    to,
    className,
  } = props

  return (
    <div>
      {open ? (
        <Choice /> 
      ) : (
        <>
        <div className={`${styles.email}`}>
          <div className={styles.email__title}>
            {title}
          </div>
          <div className={styles.email__subtitle}>
            {subtitle}
          </div>
          <div className={styles.email__row}>
            <div className={styles.email__col}>1</div>
            <div className={styles.email__col}>F</div>
            <div className={styles.email__col}>D</div>
            <div className={styles.email__col}>4</div>
          </div>
          <Link to={to}>
            <button onClick={handleOpen} className={styles.email__btn}>
              {btntitle}
            </button>
          </Link>
        </div>
        </>
      )}
    </div>
    
  )
}

export default Email
