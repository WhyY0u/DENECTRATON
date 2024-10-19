import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Navigation.module.css'
import triangle_down from '../../../public/images/triangle_down.svg'
import tickets from '../../../public/images/tickets.svg'
import list from '../../../public/images/list.svg'
import schedule from '../../../public/images/schedule.svg'
import user from '../../../public/images/user.svg'

function Navigation({add, to}) {

  return (
      <div className={styles.navigation}>
        <div className={styles.navigation__container + " " + (add ? styles.add_enabled_padding : styles.add_disable_padding)}>
          <Link to={'/profile-page-company'}>
            <div className={`${styles.navigation__tickets__block} ${styles.tickets__block}`}>
              <div className={styles.tickets__block__text__block}>
                <p className={styles.tickets__block__text__block__parg}>Ticket</p>
                <img className={styles.tickets__block__text__block__img} src={triangle_down} alt="" />
              </div>
              <img className={styles.navigation__tickets__block__img} src={tickets} alt="" />
            </div>
          </Link>
          <Link to={''} >
            <div className={`${styles.navigation__news__block} ${styles.news__block}`}>
              <div className={styles.news__block__text__block}>
                <p className={styles.news__block__text__block__parg}>News</p>
                <img className={styles.news__block__text__block__img} src={triangle_down} alt="" />
              </div>
              <img className={styles.navigation__news__block__img} src={list} alt="" />
            </div>
          </Link>

          
            
          <div className={`${styles.navigation__schedule__block} ${styles.schedule__block}`}>
            <div className={styles.schedule__block__text__block}>
              <p className={styles.schedule__block__text__block__parg}>Schedule</p>
              <img className={styles.schedule__block__text__block__img} src={triangle_down} alt="" />
            </div>
            <img className={styles.navigation__schedule__block__img} src={schedule} alt="" />
          </div>
          <Link to={'/userprofile'}>
            <div className={`${styles.navigation__profile__block} ${styles.profile__block}`}>
              <div className={styles.profile__block__text__block}>
                <p className={styles.profile__block__text__block__parg}>Profile</p>
                <img className={styles.profile__block__text__block__img} src={triangle_down} alt="" />
              </div>
              <img className={styles.navigation__profile__block__img} src={user} alt="" />
            </div>
          </Link>
        </div>
      </div>
  )
}

export default Navigation
