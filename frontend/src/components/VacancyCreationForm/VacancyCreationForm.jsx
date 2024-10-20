import React from 'react'
import styles from './styles/VacancyCreationForm.module.css'

function VacancyCreationForm() {
  return (
    <div className={styles.vacancy__creation__form}>
        <div className={`${styles.vacancy__creation__form__container} _container`}>
            <h2>Vacancy Form</h2>

            <div className={styles.inputs__block}>
                <input
                    type="text" 
                    placeholder='Title'
                    className={styles.input__title}
                />
                <input 
                    type="text" 
                    placeholder='Subtitle'
                />
            </div>
        </div>
    </div>
  )
}

export default VacancyCreationForm
