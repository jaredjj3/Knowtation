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

const navigation = (currentUser, logout) => (
  <nav>
    <ul>
      <li>{ currentUser.username }</li>
      <li><button onClick={ logout }>Log Out</button></li>
    </ul>
  </nav>
);

const Navigation = ({ currentUser, logout, clearErrors, toggleModal, modalOn }) => {
  const clearErrorsAndToggleModal = () => {
    clearErrors();
    if (!modalOn) {
      toggleModal();
    }
  };

  if (currentUser) {
    return navigation(currentUser, logout);
  } else {
    return sessionLinks(clearErrorsAndToggleModal)
  }
}

export default Navigation;
