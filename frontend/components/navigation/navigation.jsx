import React from 'react';
import { Link } from 'react-router';

const sessionLinks = clearErrorsAndToggleModal => (
  <ul className="navigation-links">
    <li><Link to="/signup" onClick={ clearErrorsAndToggleModal }>Sign up</Link></li>
    <li><Link to="/login" onClick={ clearErrorsAndToggleModal }>Log In</Link></li>
  </ul>
);

const navigation = (currentUser, logout) => (
  <ul className="navigation-links">
    <li>{ currentUser.username }</li>
    <li><button onClick={ logout }>Log Out</button></li>
  </ul>
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
