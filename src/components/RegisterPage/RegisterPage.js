import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './RegisterPage.css'

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    login: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChangeData = e => {
    const { name, value } = e.target;

    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/drones");

    console.log(userData);
  }
  
  const iconUser = require('../../assets/icon_user.svg').default;
  const iconPass = require('../../assets/icon_pass.svg').default;
  const iconMail = require('../../assets/mail.svg').default;

  return (
    <form className='register-page' onSubmit={handleSubmit}>
      <label className='register-page__label'>
        <div className='register-page__icon-wrapper'>
          <img src={iconUser} alt="login_icon" />
        </div>

        <input 
          name='login'
          type="text"
          required
          placeholder='Full name'
          onChange={handleChangeData}
          className='register-page__input'
        />
      </label>

      <label className='register-page__label'>
        <div className='register-page__icon-wrapper register-page__icon-wrapper--mail'>
          <img src={iconMail} alt="login_icon" />
        </div>

        <input 
          name='email'
          type="email"
          required
          placeholder='Email'
          onChange={handleChangeData}
          className='register-page__input'
        />
      </label>

      <label className='register-page__label'>
        <div className='register-page__icon-wrapper'>
        <img src={iconPass} alt="login_icon" />
        </div>

        <input 
          name='password'
          type="password"
          required
          placeholder='Password'
          onChange={handleChangeData}
          className='register-page__input'
        />
      </label>

      <button className='register-page__submit'>
        Register
      </button>
    </form>
  )
}

export default RegisterPage;