import React from 'react';
import { Link } from 'react-router';

const sessionLinks = clearErrors => (
  <nav>
    <ul>
      <li><Link to="/login" onClick={ clearErrors }>Login</Link></li>
      <li><Link to="/signup" onClick={ clearErrors }>Sign up</Link></li>
    </ul>
  </nav>
);

const clearErrorsAndToggleModal = (clearErrors, toggleModal) => {
  clearErrors;

};

const greeting = (currentUser, logout) => (
  <nav>
    <ul>
      <li>{ currentUser.username }</li>
      <li><button onClick={ logout }>Log Out</button></li>
    </ul>
  </nav>
);

const Greeting = ({ currentUser, logout, clearErrors }) => {
  if (currentUser) {
    return greeting(currentUser, logout);
  } else {
    return sessionLinks(clearErrors)
  }
}

export default Greeting;
