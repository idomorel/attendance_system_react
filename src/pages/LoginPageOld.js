

import login from '../api/login';
import BasePage from '../components/BasePage';
import { useState } from 'react';
import '../css/LoginPage.css'


const LoginPage = ({ onLoginSuccess }) => {
    const [showForm, setShowForm] = useState(true);
    const [showWelcome, setShowWelcome] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setShowForm(false);
      setTimeout(() => {
        setShowWelcome(true);
        setTimeout(() => {
          setShowWelcome(false);
          onLoginSuccess();
        }, 3000); // Show welcome message for 3 seconds
      }, 1000); // Wait for form to slide out
    };
  
    return ( //not really useful, gotta implement it myself
        <BasePage version="1.0">
      <div className="login-page">
        <div className="left-column">
          <p>Your text here</p>
        </div>
        <div className={`right-column ${!showForm ? 'slide-out' : ''}`}>
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log In</button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log In</button>
            </form>
          )}
          {showWelcome ? (
            <div className="welcome-message">Welcome!</div>
          ) : null}
        </div>
      </div>
        </BasePage>
    );
  };
  
  export default LoginPage;