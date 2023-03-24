import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'

const MainPage = () => {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate('/login');
  }

  return (
    <div className="main-page">
      <div className='container'>
        <h2 className='main-page__title'>
          Hello there!
        </h2>

        <p className='main-page__desc'>
          Spendyverse is the website where you can manage your spendings and see 
          statistics on them. Also, you can subscribe on other users and see 
          their statistics
        </p>

        <button 
          type="button" 
          className='main-page__login'
          onClick={handleLoginPage}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default MainPage;