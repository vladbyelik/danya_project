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
          The "Drone Shop" is your go-to destination for all things drones. 
          We offer a wide selection of high-quality drones, accessories, 
          and parts, as well as expert repair and maintenance services. 
          Whether you're a hobbyist or a professional, we've got everything 
          you need to take your drone experience to the next level
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