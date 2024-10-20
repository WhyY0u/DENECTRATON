import React, { useRef, useState } from 'react'
import styles from './styles/AboutCompany.module.css'
import back_btn from '../../../../public/images/ProfilepageCompany/AboutCompany/back_btn.svg'
import question_mark from '../../../../public/images/ProfilepageCompany/AboutCompany/question_mark.svg'
import microsoft_logo from '../../../../public/images/ProfilepageCompany/AboutCompany/microsoft_logo.png'
import instagram from '../../../../public/images/ProfilepageCompany/AboutCompany/instagram.svg'
import linkedin from '../../../../public/images/ProfilepageCompany/AboutCompany/linkedin.svg'
import vk from '../../../../public/images/ProfilepageCompany/AboutCompany/vk.svg'
import { SkillScaleExecGlobal } from '../../SkillScaleExecGlobal/SkillScaleExecGlobal'

function AboutCompany() {
    const [profileImage, setProfileImage] = useState(microsoft_logo)
    const fileInputRef = useRef(null)

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                setProfileImage(reader.result);
    
                const formData = new FormData();
                formData.append('image', file); // Используйте сам файл
            };
            reader.readAsDataURL(file); 
        }
    };

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }


  return (
    <div className={styles.about__company}>
        <div className={`${styles.about__company__container} _container`}>
            <div className={`${styles.about__company__back__btn} ${styles.back__btn}`}>
                <img className={styles.back__btn__img} src={back_btn} alt="" />
            </div>
            
            <div className={`${styles.about__company__main__block} ${styles.main__block}`}>
                <div className={`${styles.main__block__general} ${styles.general}`}>
                    <div className={styles.animation}>
                        <div onClick={handleImageClick} className={`${ profileImage === question_mark ? styles.name__block__image : styles.name__block__image__main}`}>
                                <img
                                    className={`${profileImage === question_mark ? styles.name__block__image__img : styles.name__block__image__img__main}`}
                                    src={profileImage}
                                    alt="Profile"
                                    style={{ cursor: 'pointer' }} // Указатель курсора для интерактивности
                                />
                                <input
                                    id="file-upload"
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*" // Принимаем только изображения
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }} // Скрываем input
                                />                    
                        </div>
                    </div>
                    <div className={styles.general__info}>
                        <div className={`${styles.general__info__header__block} ${styles.header__block}`}>
                            <p className={styles.header__block__parg}>Organisation</p>
                            <h4 className={styles.header__block__title}>Microsoft Corp.</h4>
                        </div>

                        <div className={`${styles.general__info__desc__block} ${styles.desc__block}`}>
                            <p className={styles.desc__block__desc}>Microsoft is an American technology company, developer of software including Windows and Office.</p>
                            <div className={`${styles.desc__block__rating} ${styles.rating}`}>
                                <div className={styles.rating__digit}>10.0</div>
                                <SkillScaleExecGlobal level={10} className={styles.rating__scale} />
                            </div>
                        </div>

                        <div className={`${styles.general__info__buttons_block} ${styles.buttons__block}`}>
                            <button
                                className={styles.buttons__block__write}
                            >Write</button>                        
                            <button 
                                className={styles.buttons__block__follow}
                            >Follow+</button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.main__block__socials} ${styles.socials}`}>
                    <div className={styles.socials__block}>
                        <div className={styles.socials__block__1}>
                            <div className={`${styles.socials__block__1__email}`}>
                                <div className={styles.title}>Email</div>
                                <p className={styles.parg}>microsoft@gmail.com</p>
                            </div>
                            <div className={`${styles.socials__block__1__phone}`}>
                                <div className={styles.title}>Phone</div>
                                <p className={styles.parg}>+77059999999</p>
                            </div>
                        </div>
                        <div className={styles.socials__block__2}>
                            <div className={`${styles.socials__block__2__vacansies}`}>
                                <div className={styles.title}>Vacansies</div>
                                <p className={styles.parg}>4 active vacansies</p>
                            </div>
                            <div className={`${styles.socials__block__1__socials}`}>
                                <div className={styles.title}>Social Media</div>
                                <div className={styles.socials__imgs}>
                                    <img className={styles.socials__imgs__img} src={instagram} alt="" />
                                    <img className={styles.socials__imgs__img} src={linkedin} alt="" />
                                    <img className={styles.socials__imgs__img} src={vk} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socials__reviews}>
                        <div className={styles.title}>Last Reviews</div>
                        <ul className={styles.socials__reviews__list}>
                            <li className={styles.parg}>Test</li>
                            <li className={styles.parg}>Test</li>
                            <li className={styles.parg}>Test</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default AboutCompany
