import React, { useState } from 'react'
import styles from './styles/LoginForm.module.css'
import Input from '../../InputGlobal/Input'
import EyeIcon from '../../EyeIcon/EyeIcon';

function LoginForm() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [formData, setFormData] = useState({
      login: '',
      password: ''
    });
    const [isFocused, setIsFocused] = useState({
      login: false,
      password: false,
    })

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
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
    <div className={styles.login__form}>
        <div className={`${styles.login__form__container} _container`}>
            <div className={styles.login__form__input}>
                <label className={`${ !isFocused.login && isFormDataEmpty(formData.login) ? styles.login__form__placeholder : styles.login__form__placeholder__top}`}>Login</label>
                <Input 
                    type="text"
                    name="login"
                    value={formData.login}
                    onChange={handleFormDataChange}
                    onFocus={() => handleFocus('login')}
                    onBlur={() => handleBlur('login')}
                />
            </div>
            <div className={styles.login__form__input}>
                <label className={`${ !isFocused.password && isFormDataEmpty(formData.password) ? styles.login__form__placeholder : styles.login__form__placeholder__top}`}>Password</label>
                <Input 
                    type={isPasswordVisible ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleFormDataChange}
                    onFocus={() => { setIsClicked(true),handleFocus('password')}}
                    onBlur={() => { setIsClicked(false), handleBlur('password')}}
                />
                <div className={styles.login__form__icon__password}>
                  <EyeIcon 
                    isOpen={isPasswordVisible} 
                    toggleEye={togglePasswordVisibility} 
                    isClicked={isClicked}
                  />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default LoginForm
