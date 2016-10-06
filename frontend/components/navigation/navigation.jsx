import React from 'react';
import { Link } from 'react-router';

const sessionLinks = clearErrorsAndToggleModal => (
  <ul className="navigation-links">
    <li>
      <Link
        to="/signup"
        onClick={ clearErrorsAndToggleModal('session') }
      >
        Sign up
      </Link>
    </li>
    <li className="nth-nav-link">
      <Link
        to="/login"
        onClick={ clearErrorsAndToggleModal('session') }
      >
        Log In
      </Link>
    </li>
  </ul>
);

const navigation = (currentUser, logout, clearErrorsAndToggleModal) => (
  <ul className="navigation-links">
    <li className="teach-button">
      <Link
        to="/teach"
        onClick={ clearErrorsAndToggleModal('teach') }
      >
        Teach
      </Link>
    </li>
    <li>{ currentUser.username }</li>
    <li className="nth-nav-link">
      <button onClick={ logout }>Log Out</button>
    </li>
  </ul>
);

const Navigation = ({
    currentUser,
    logout,
    clearErrors,
    toggleModal,
    modalOn
  }) => {

  const clearErrorsAndToggleModal = modal => {

    return () => {
      clearErrors();
      if (!modalOn) {
        toggleModal(modal);
      }
    };
  };

  if (currentUser) {
    return navigation(currentUser, logout, clearErrorsAndToggleModal);
  } else {
    return sessionLinks(clearErrorsAndToggleModal)
  }
}

export default Navigation;
