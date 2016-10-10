import React from 'react';
import { Link } from 'react-router';

export default ({ props }) => {
  const { toggleModal, clearErrors, currentUser, logout } = props;

  const handleClick = modal => {
    return () => {
      clearErrors();
      toggleModal(modal);
    };
  };

  const teachOrUpload = () => {
    if (currentUser.userType === 'teacher') {
      return (
        <button
          className="main-button"
          onClick={ handleClick('upload') }
          >
          Upload
        </button>
      );
    } else {
      return(
        <button
          className="main-button"
          onClick={ handleClick('teach') }
          >
          Teach
        </button>
      );
    }
  };

  return (
    <ul className="navigation-links">
      <li className="nth-nav-link">
        { teachOrUpload() }
      </li>
      <li>
        <Link
          to={ "/profile/" + currentUser.id }
        >
          { currentUser.username }
        </Link>
      </li>
      <li>
        <Link to="/library" onClick={ logout }>Log Out</Link>
      </li>
    </ul>
  );
};
