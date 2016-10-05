import React from 'react';
import { Link } from 'react-router';

const sessionLinks = clearErrorsAndToggleModal => (
  <nav>
    <ul>
      <li><Link to="/login" onClick={ clearErrorsAndToggleModal }>Login</Link></li>
      <li><Link to="/signup" onClick={ clearErrorsAndToggleModal }>Sign up</Link></li>
    </ul>
  </nav>
);

const greeting = (currentUser, logout) => (
  <nav>
    <ul>
      <li>{ currentUser.username }</li>
      <li><button onClick={ logout }>Log Out</button></li>
    </ul>
  </nav>
);

const Greeting = ({ currentUser, logout, clearErrors, toggleModal, modalOn }) => {
  const clearErrorsAndToggleModal = () => {
    clearErrors();
    if (!modalOn) {
      toggleModal();
    }
  };

  if (currentUser) {
    return greeting(currentUser, logout);
  } else {
    return sessionLinks(clearErrorsAndToggleModal)
  }
}

export default Greeting;
