import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';

const LoginPage = () => {
  const [userData, setUserData] = useState({
    login: '',
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
    console.log(userData);
    navigate("/drones");
  }
  
  const handleRegisterPage = e => {
    e.preventDefault();
    navigate("/register");
  }

  const iconUser = require('../../assets/icon_user.svg').default;
  const iconPass = require('../../assets/icon_pass.svg').default;

  return (
    <form className='login-page' onSubmit={handleSubmit}>
      <label className='login-page__label'>
        <div className='login-page__icon-wrapper'>
          <img src={iconUser} alt="login_icon" />
        </div>

        <input 
          required
          name='login'
          type="text"
          placeholder='Email ID'
          onChange={handleChangeData}
          className='login-page__input'
        />
      </label>

      <label className='login-page__label'>
        <div className='login-page__icon-wrapper'>
        <img src={iconPass} alt="login_icon" />
        </div>

        <input 
          required
          name='password'
          type="password"
          placeholder='Password'
          onChange={handleChangeData}
          className='login-page__input'
        />
      </label>

      <span className='login-page__link'>
        No account yet? <a href='/' onClick={handleRegisterPage}>
          Register
        </a>
      </span>

      <button className='login-page__submit'>
        Login
      </button>
    </form>
  )
}

export default LoginPage;