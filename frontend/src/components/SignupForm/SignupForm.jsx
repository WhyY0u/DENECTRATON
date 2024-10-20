import React, { useState } from 'react'
import styles from './styles/SignupForm.module.css'
import Input from '../InputGlobal/Input'
import EyeIcon from '../EyeIcon/EyeIcon';
import InputLittleGlobal from '../InputLittleGlobal/InputLittleGlobal';
import SignupButtonGlobal from '../SignupButtonGlobal/SignupButtonGlobal';

function SignupForm({handleOpen}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPasswordConfVisible, setIsPasswordConfVisible] = useState(false)
    const [isPasswordClicked, setIsPasswordClicked] = useState(false)
    const [isPasswordConfClicked, setIsPasswordConfClicked] = useState(false)
    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      email: '',
      confirmpassword: '',
      patronymic:'',
      login:'',
      password: ''
    });
    const [isFocused, setIsFocused] = useState({
      name: false,
      patronymic:false,
      email:false,
      confirmpassword:false,
      login:false,
      surname: false,
      password: false,
    })

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const togglePasswordConfVisibility = () => {
      setIsPasswordConfVisible(!isPasswordConfVisible);
    };

    const handleFormDataChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  };

    const isFormDataEmpty = (value) => {
      return value?.trim() === '' 
    }

    const handleFocus = (field) => {
      setIsFocused((prev) => ({
        ...prev,
        [field]: true,
      }))
    }

    const handleBlur = (field) => {
      setIsFocused((prev) => ({
          ...prev,
          [field]: false,
      }))
  }

  return (
    <div className={styles.signup__form}>
        <div className={`${styles.signup__form__container} _container`}>
                <div className={`${styles.signup__form__main}`}>
                    <div className={`${styles.signup__form__block1}`}>
                    <div className={`${styles.signup__form__input} ${styles.signup__name}`}>
                      <label className={`${ !isFocused.name && isFormDataEmpty(formData.name) ? styles.signup__form__placeholder : styles.signup__form__placeholder__top}`}>Name</label>
                      <InputLittleGlobal
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormDataChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={() => handleBlur('name')}
                      />
                    </div>
                      <div className={`${styles.signup__form__input} ${styles.signup__surname}`}>
                          <label className={`${ !isFocused.surname && isFormDataEmpty(formData.surname) ? styles.signup__form__placeholder : styles.signup__form__placeholder__top}`}>Surname</label>
                          <InputLittleGlobal
                              type="text"
                              name="surname"
                              value={formData.surname}
                              onChange={handleFormDataChange}
                              onFocus={() => handleFocus('surname')}
                              onBlur={() => handleBlur('surname')}
                          />
                      </div>
                    </div>
                    <div className={styles.signup__form__block2}>
                      <div className={`${styles.signup__form__input} ${styles.signup__patronymic}`}>
                          <label className={`${ !isFocused.patronymic && isFormDataEmpty(formData.patronymic) ? styles.signup__form__placeholder : styles.signup__form__placeholder__top}`}>Patronymic</label>
                          <InputLittleGlobal
                              type="text"
                              name="patronymic"
                              value={formData.patronymic}
                              onChange={handleFormDataChange}
                              onFocus={() => handleFocus('patronymic')}
                              onBlur={() => handleBlur('patronymic')}
                          />
                      </div>
                      <div className={`${styles.signup__form__input} ${styles.signup__login}`}>
                          <label className={`${ !isFocused.login && isFormDataEmpty(formData.login) ? styles.signup__form__placeholder : styles.signup__form__placeholder__top}`}>Login</label>
                          <InputLittleGlobal
                              type="text"
                              name="login"
                              value={formData.login}
                              onChange={handleFormDataChange}
                              onFocus={() => handleFocus('login')}
                              onBlur={() => handleBlur('login')}
                          />
                      </div>
                    </div>
                </div>
                

                <div className={`${styles.signup__form__input} ${styles.signup__email}`}>
                  <label className={`${ !isFocused.email && isFormDataEmpty(formData.email) ? styles.signup__form__placeholder : styles.signup__form__placeholder__top}`}>Email</label>
                  <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormDataChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                  />
                </div>
                <div className={`${styles.signup__form__input} ${styles.signup__password}`}>
                    <label className={`${ !isFocused.password && isFormDataEmpty(formData.password) ? styles.signup__form__placeholder : styles.signup__form__placeholder__top}`}>Password</label>
                    <Input 
                        type={isPasswordVisible ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleFormDataChange}
                        onFocus={() => { setIsPasswordClicked(true),handleFocus('password')}}
                        onBlur={() => { setIsPasswordClicked(false), handleBlur('password')}}
                    />
                    <div className={styles.signup__form__icon__password}>
                      <EyeIcon 
                        isOpen={isPasswordVisible} 
                        toggleEye={togglePasswordVisibility} 
                        isClicked={isPasswordClicked}
                      />
                    </div>
                </div>
                <div className={`${styles.signup__form__input} ${styles.signup__conf__password}`}>
                  <label className={`${ !isFocused.confirmpassword && isFormDataEmpty(formData.confirmpassword) ? styles.signup__form__placeholder : styles.signup__form__placeholder__top}`}>Confirm password</label>
                  <Input
                      type={isPasswordConfVisible ? 'text' : 'password'}
                      name="confirmpassword"
                      value={formData.confirmpassword}
                      onChange={handleFormDataChange}
                      onFocus={() => { setIsPasswordConfClicked(true),handleFocus('confirmpassword')}}
                      onBlur={() => { setIsPasswordConfClicked(false), handleBlur('confirmpassword')}}
                  />
                  <div className={styles.signup__form__icon__password}>
                      <EyeIcon 
                        isOpen={isPasswordConfVisible} 
                        toggleEye={togglePasswordConfVisibility} 
                        isClicked={isPasswordConfClicked}
                      />
                    </div>
                </div>

                <SignupButtonGlobal 
                  title={'Sign Up'}
                  onClick={!isFormDataEmpty(formData?.login) && !isFormDataEmpty(formData?.password) 
                    && !isFormDataEmpty(formData?.name ) && !isFormDataEmpty(formData?.surname)
                    && !isFormDataEmpty(formData?.patronymic)  && !isFormDataEmpty(formData?.email) 
                    && !isFormDataEmpty(formData?.confirmpassword) ? () => handleOpen() : null}
                  className={`${!isFormDataEmpty(formData?.login) && !isFormDataEmpty(formData?.password) 
                    && !isFormDataEmpty(formData?.name ) && !isFormDataEmpty(formData?.surname)
                    && !isFormDataEmpty(formData?.patronymic)  && !isFormDataEmpty(formData?.email) 
                    && !isFormDataEmpty(formData?.confirmpassword)
                  ?  styles.signup__form__button__active
                  : styles.signup__form__button__inactive} ${styles.signup__form__button__animation}`}
                />
        </div>
    </div>
  )
}

export default SignupForm
