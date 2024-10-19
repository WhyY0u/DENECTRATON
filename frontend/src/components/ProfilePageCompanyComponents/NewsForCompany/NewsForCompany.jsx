import React from 'react'
import styles from './styles/NewsForCompany.module.css'
import gear from '../../../../public/images/ProfilepageCompany/NewsForCompany/settings.svg'
import pin from '../../../../public/images/ProfilepageCompany/NewsForCompany/pin.svg'
import { SkillScale } from '../../SkillsScaleGlobal/SkillsScaleGlobal'

function NewsForCompany() {

    const TYPES = Object.freeze({
        Vacancy: 'Vacancy',
        Event: 'Event',
    })

  return (
    <div className={styles.news__for__company}>
      <div className={`${styles.news__for__company__container} _container`}>
        <div className={styles.news__for__company__title}>
            <p>News</p>
        </div>

            <div className={`${styles.news__for__company__list} ${styles.list}`}>

                <div className={styles.list__item__vacancy}>
                    <div className={`${styles.list__item__vacancy__header} ${styles.header}`}>
                        <div className={styles.header__block__1}>
                            <div className={styles.header__title__block}>
                                <h3 className={styles.header__title__block__title}>Backend Developer</h3>
                                <img className={styles.header__title__block__img} src={gear} alt="" />
                            </div>
                            <div className={styles.header__description}>From 700.000 To 800.000 тг/mon</div>
                        </div>

                        <div className={styles.header__block__2}>
                            <div className={styles.header__pin__block}>
                                <img className={styles.header__pin__block__img} src={pin} alt="" />
                                <h3 className={styles.header__pin__block__text}>Today at 16:30</h3>
                            </div>
                            <div className={
                                TYPES?.Vacancy 
                                ? styles.header__pin__type__blue
                                : styles.header__pin__type__purple
                            }>{TYPES.Vacancy}</div>
                        </div>
                    </div>

                    <div className={`${styles.list__item__vacancy__desc} ${styles.desc}`}>
                        Search for a Backend Developer in the global IT company Microsoft, we are looking for a Backend Developer with 2 years of experience in the following stacks
                    </div>

                    <div className={`${styles.list__item__vacancy__skills} ${styles.skills}`}>
                        <div className={styles.skills__item}>
                            <div className={styles.skills__item__title}>Docker</div>
                            <SkillScale level={2} />
                        </div>
                        <div className={styles.skills__item}>
                            <div className={styles.skills__item__title}>Cassandra</div>
                            <SkillScale level={4} />
                        </div>
                        <div className={styles.skills__item}>
                            <div className={styles.skills__item__title}>MySql</div>
                            <SkillScale level={3} />
                        </div>
                        <div className={styles.skills__item}>
                            <div className={styles.skills__item__title}>Redis</div>
                            <SkillScale level={5} />
                        </div>
                    </div>


                    <div className={`${styles.list__item__vacancy__reply} ${styles.reply}`}>
                        <button className={styles.reply__btn}>Reply</button>
                    </div>
                </div>

                <div className={styles.list__item__event}>
                    <div className={`${styles.list__item__vacancy__header} ${styles.header}`}>
                        <div className={styles.header__block__1}>
                            <div className={styles.header__title__block}>
                                <h3 className={styles.header__title__block__title}>DECENTRATON</h3>
                            </div>
                            <div className={styles.header__description}>Well Come to DECENTRATON</div>
                        </div>

                        <div className={styles.header__block__2}>
                            <div className={styles.header__pin__block}>
                                <h3 className={styles.header__pin__block__text}>Today at 16:32</h3>
                            </div>
                            <div className={
                                TYPES?.Event 
                                ? styles.header__pin__type__purple 
                                : styles.header__pin__type__blue
                            }>{TYPES.Event}</div>
                        </div>
                    </div>

                    <div className={`${styles.list__item__vacancy__desc} ${styles.desc}`}>
                        DECENTRATON is a hackathon dedicated to the development of decentralized solutions based on the blockchain. Members work on projects that solve real-world problems by improving data security and transparency. The hackathon includes training, mentoring and the opportunity to present your ideas to experts and potential investors.
                    </div>


                    <div className={styles.buttons__info__block}>
                        <button className={`${styles.reply__btn} ${styles.participate__btn}`}>Participate</button>
                        <div className={styles.info__block}>
                            <div className={`${styles.info__block__place__block} ${styles.place__block}`}>
                                <div className={styles.place__block__title}>Place</div>
                                <p className={styles.place__block__place}>Astana HUB</p>
                            </div>
                            <div className={`${styles.info__block__place__block} ${styles.place__block}`}>
                                <div className={styles.place__block__title}>Start</div>
                                <p className={styles.place__block__place}>Today at 16:32</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
      </div>
    </div>
  )
}

export default NewsForCompany
