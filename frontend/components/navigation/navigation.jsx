import React from 'react';
import { Link } from 'react-router';

// Links the users see when they are not logged in
const sessionLinks = props => {
  const { clearErrors, toggleModal, sessionModalOn } = props;
  const handleOnClick = () => {
    clearErrors();
    if (!sessionModalOn) {
      toggleModal('session');
    }
  };

  return (
    <ul className="navigation-links">
      <li>
        <Link
          to="/signup"
          onClick={ handleOnClick }
        >
          Sign up
        </Link>
      </li>
      <li className="nth-nav-link">
        <Link
          to="/login"
          onClick={ handleOnClick}
        >
          Log In
        </Link>
      </li>
    </ul>
  );
};

// Links the users see when they are logged in
const navigationLinks = props => {
  const {
    currentUser,
    clearErrors,
    teachModalOn,
    toggleModal,
    logout
    } = props;

  const handleOnClick = () => {
    clearErrors();
    if (!teachModalOn) {
      toggleModal('teach');
    }
  };

  let linkPath, buttonText;
  if (currentUser.userType === 'student') {
    linkPath = '/teach';
    buttonText = 'Teach';
  } else if (currentUser.userType === 'teacher') {
    linkPath = 'knowtation/upload';
    buttonText = 'Upload';
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
  if (props.currentUser) {
    return navigationLinks(props);
  } else {
    return sessionLinks(props);
  }
};

export default Navigation;
