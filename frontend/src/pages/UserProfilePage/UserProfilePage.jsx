import React from 'react'
import styles from './styles/UserProfilePage.module.css'
import arrow from "../../../../frontend/public/images/UserProfilePage/arrow.svg"
import userpic from "../../../../frontend/public/images/UserProfilePage/userpic.svg"
import inst from "../../../../frontend/public/images/UserProfilePage/inst.svg"
import linkedin from "../../../../frontend/public/images/UserProfilePage/linkedin.svg"
import stack from "../../../../frontend/public/images/UserProfilePage/stack.svg"
import vk from "../../../../frontend/public/images/UserProfilePage/vk.svg"
import check from "../../../../frontend/public/images/UserProfilePage/check.svg"
import x from "../../../../frontend/public/images/UserProfilePage/x.svg"
import Background from '../../components/BackgroundGlobal/Background'
import logo_background from '../../../public/images/Background/logo_background.png'
import { SkillScale } from '../../components/SkillsScaleGlobal/SkillsScaleGlobal'
import { SkillScaleExecGlobal } from '../../components/SkillsScaleVnos/SkillScaleExecGlobal'
import ReviewsCompany from '../../components/ReviewsCompany/ReviewsCompany'
import Navigation from '../../components/Navigation/Navigation'

const UserProfilePage = () => {
    const getColorByLevel = (level) => {
        switch (level) {
          case 1:
            return '#ff4d4d'; 
          case 2:
            return '#ff9933'; 
          case 3:
            return '#ffcc00'; 
          case 4:
            return '#99cc33'; 
          case 5:
            return '#4caf50'; 
          default:
            return '#e0e0e0'; 
        }
      };
    return (
        <div className={styles.userprofile__page}>
          <Background src={logo_background}>
            <div className={`${styles.userprofile__page} _container`}>
            <div className={styles.userprofile__image}>
              <img src={arrow} alt="" />
            </div>
            <div className={styles.userprofile__block}>
              <div className={styles.userprofile__block_first}>
                <img src={userpic} alt="" />
              </div>
              <div className={styles.userprofile__block_second}>
                <div className={styles.userprofile__info}>
                  <div className={styles.userprofile__role}>Executor</div>
                  <div className={styles.userprofile__name}>Древов Даниил Николаевич</div>
                </div>
                <div className={styles.userprofile__skills}>
                  <div className={styles.userprofile__desc}>
                    I'm a Senior Backend and Frontend Developer on Scretch
                  </div>
                  <div className={styles.userprofile__skills_scale}>
                    <span>4.0</span>
                    <SkillScaleExecGlobal level={4} />
                  </div>
                </div>
                <div className={styles.userprofile__buttons}>
                  <button className={styles.userprofile__btn1}>Write</button>
                  <button className={styles.userprofile__btn2}>Follow+</button>
                </div>
              </div>              

            </div>
            <div className={styles.contactsblock}>
              <div className={styles.contactsblock__row}>
                <div className={styles.contactsblock__col}>
                  <div className={styles.contactsblock__title}>Email</div>
                  <div className={styles.contactsblock__subtitle}>
                    dzhigiobshiy@gmail.com
                  </div>
                </div>
                <div className={styles.contactsblock__col}>
                  <div className={styles.contactsblock__title}>Phone</div>
                  <div className={styles.contactsblock__subtitle}>+77059999999</div>
                </div>
                <div className={styles.contactsblock__col}>
                  <div className={styles.contactsblock__title}>Popular Card</div>
                  <div className={styles.contactsblock__subtitle}>Test</div>
                  <div className={styles.contactsblock__subtitle}>Test</div>
                  <div className={styles.contactsblock__subtitle}>Test</div>
                </div>
                <div className={`${styles.contactsblock__col} ${styles.vnoscard}`}>
                  <div className={styles.contactsblock__title}>Card</div>
                  <div className={styles.contactsblock__subtitle}>4 active card</div>
                </div>
                <div className={`${styles.contactsblock__col} ${styles.vnossocial}`}>
                  <div className={styles.contactsblock__title}>Social Media</div>
                  <div className={styles.contactsblock__icons}>
                    <img src={inst} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={vk} alt="" />
                  </div>
                </div>
              </div>
                <div className={styles.setofskills}>
                    <div className={styles.setofskills__col}>
                        <SkillScale skill="Docker" level={2} />
                        <SkillScale skill="MySql" level={3} />
                    </div>
                    <div className={styles.setofskills__col}>
                        <SkillScale skill="Cassandra" level={4} />
                        <SkillScale skill="Redis" level={5} />
                    </div>
                </div>
            </div>
            <div className={styles.perfomance}>
                <div className={styles.perfomance__header}>
                    <div className={styles.perfomance__headerfirst}>
                        <div><span className={styles.perfomance__headertext}>Perfomance in</span> <span className={styles.perfomance__headertext2}><div className={styles.perfomance__textnos}></div>DECENTRATHON</span>
                        </div>
                        <span className={styles.perfomance__headersecond}>Today at 16:30</span>
                    </div>
                </div>
                <div className={styles.perfomance__desc}>
                DECENTRATON is a hackathon dedicated to the development of decentralized solutions based on the blockchain. Members work on projects that solve real-world problems by improving data security and transparency. The hackathon includes training, mentoring and the opportunity to present your ideas to experts and potential investors.
                </div>
            </div>
            <div className={styles.stack}>
                <div className={styles.stack__header}>
                    <div className={styles.stack__header_first}>
                        <div className={styles.stack__header_title}>Backend Card  <img src={stack} alt=""/></div>
                        <span className={styles.stack__headersecond2}>Today at 16:30</span>
                    </div>
                    <div className={styles.stack__header_second}>
                        <div className={styles.stack__header_subtitle}>Seinor Card</div> 
                        <span className={styles.stack__headersecond}>Card</span>
                    </div>
                    <div className={styles.stack__header_desc}>
                    Search for a Backend Developer in the global IT company Microsoft, we are looking for a Backend Developer with 2 years of experience in the following stacks
                    </div>
                </div>
                <div className={styles.stack__main}>
                <div className={styles.stackTable}>
                    <div className={styles.stackRow}>
                        <div className={styles.stackHeader}>Stack</div>
                        <div className={styles.stackHeader}>Start</div>
                        <div className={styles.stackHeader}>Normal</div>
                        <div className={styles.stackHeader}>Business</div>
                    </div>
                    <div className={styles.stackRow}>
                        <div className={styles.stackItem}>Backend</div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div> 
                    </div>
                    <div className={styles.stackRow}>
                        <div className={styles.stackItem}>DataBase</div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div> 
                    </div>
                    <div className={styles.stackRow}>
                        <div className={styles.stackItem}>Apache Kafka</div>
                        <div className={styles.stackItem}><img src={x} alt=""/></div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div> 
                        <div className={styles.stackItem}><img src={check} alt=""/></div> 
                    </div>
                    <div className={styles.stackRow}>
                        <div className={styles.stackItem}>Docker</div>
                        <div className={styles.stackItem}><img src={x} alt=""/></div>
                        <div className={styles.stackItem}><img src={x} alt=""/></div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div> 
                    </div>
                    <div className={styles.stackRow}>
                        <div className={styles.stackItem}>Jenkins</div>
                        <div className={styles.stackItem}><img src={x} alt=""/></div>
                        <div className={styles.stackItem}><img src={x} alt=""/></div>
                        <div className={styles.stackItem}><img src={check} alt=""/></div> 
                    </div>
                    </div>
                </div>

            </div>
            </div>
            <ReviewsCompany/>
          </Background>
          <div className={`${styles.profile__page__navigation__container} _container`}>
                <Navigation />
          </div>
        </div>
      );
      
}

export default UserProfilePage
