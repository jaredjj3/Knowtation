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

const navigation = (
  currentUser,
  logout,
  clearErrors,
  clearErrorsAndToggleModal
) => {
  let linkPath, handleOnClick, buttonText;
  if (currentUser.userType === 'student') {
    linkPath = '/teach';
    handleOnClick = clearErrorsAndToggleModal('teach');
    buttonText = 'Teach';
  } else if (currentUser.userType === 'teacher') {
    linkPath = 'knowtation/upload';
    handleOnClick = clearErrors;
    buttonText = 'Upload'
  }

  return (
    <ul className="navigation-links">
      <li className="main-button">
        <Link
          to={ linkPath }
          onClick={ handleOnClick }
          >
          { buttonText }
        </Link>
      </li>
      <li>{ currentUser.username }</li>
      <li className="nth-nav-link">
        <button onClick={ logout }>Log Out</button>
      </li>
    </ul>
  );
};

const Navigation = props => {

  if (currentUser) {
    return navigation(
      currentUser,
      logout,
      clearErrors,
      toggleModal
    );
  } else {
    return sessionLinks(clearErrors, toggleModal);
  }
};

export default Navigation;
