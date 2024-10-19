import React, { useState } from 'react'
import styles from './styles/ReviewsCompany.module.css'
import bully from '../../../public/images/UserProfilePage/bully.svg'
import bateman from '../../../public/images/UserProfilePage/bateman.svg'
import { SkillScaleExecGlobal } from '../SkillsScaleVnos/SkillScaleExecGlobal'

function ReviewsCompany() {

    const [images, setImages] = useState([bateman]);


    const [current, setCurrent] = useState(-1);
    const handleImageClicked = (index) => {
        setCurrent(index)

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    
      const handleImageClose = () => {
        setCurrent(-1)
      }
      const areImagesMoreThanLimit = () => {
        return images.length > 3 ? images.slice(0, 3) : images;
      }
    
      const displayedImages = areImagesMoreThanLimit();

  return (
    <div className={styles.reviews__company}>
      <div className={`${styles.reviews__company__container} _container`}>
        <div className={styles.reviews__company__title}>
            <p>Reviews</p>
        </div>
        <div className={`${styles.reviews__company__list} ${styles.list}`}>
            <div className={styles.list__item}>
                <div className={styles.list__item__header}>
                    <div className={styles.header__profile}>
                        <img className={styles.profile__image} src={bully} alt="" />
                        <div className={styles.name__and__status}>
                            <div className={styles.name}>Hopkins J.J</div>
                            <p className={styles.status}>Executor</p>
                        </div>
                    </div>
                    
                    <div className={styles.header__scale}>
                        <div className={styles.header__scale__digit}>4.0</div>
                        <SkillScaleExecGlobal level={4} />
                    </div>
                </div>

                <div className={styles.description}>
                    This is a really great company. I strogly recommend everyone to work there
                </div>

                <div className={`${styles.item__block__img__row} ${styles.img__row}`}>
                  <div className={styles.img__row__row}>
                    {displayedImages?.map((image, index) => (
                      <img
                        onClick={() => handleImageClicked(index)}
                          key={index}
                          className={`${styles.img__row__row__image} `}
                          src={image}
                          alt=""
                      />
                    ))}
                  </div>
                  {displayedImages.length < images.length && (
                    <div onClick={() => setCurrent(0)} className={styles.img__row__likes__digit}>+{images.length - displayedImages.length}</div>
                  )}
                </div>
            </div>
        </div>
      </div>


      {current !== -1 && 
            <div className={`${styles.news__list__user__image__macro} ${styles.image__macro}`}>
              <div className={styles.image__macro__container}>
                <div className={`${styles.image__macro__btn__block} ${styles.btn__block}`}>
                  <img src={back_btn} alt='arrow left' onClick={() => handleImageClose()} className={styles.btn__block__close__btn} />
                  <a className={styles.btn__block__download__btn} href={images[current]} download>
                    <img className={styles.btn__block__download__btn__img} src={download_icon} alt="" />
                  </a>
                </div>
                <div className={styles.image__macro__wrapper}>
                  <img className={styles.image__macro__img} src={images[current]} alt="nt bb" />
                </div>
                <div className={styles.image__macro__wrapper__container}>
                  <div className={styles.image__macro__images}>
                    {images?.map((image, index) => (
                        <img onClick={() => handleImageClicked(index)} key={index} className={`${styles.image__micro__img} ${styles.image__micro__img__slider}`} src={image} alt={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
    </div>
  )
}

export default ReviewsCompany
