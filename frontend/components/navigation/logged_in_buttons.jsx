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
          upload
        </button>
      );
    } else {
      return(
        <button
          className="main-button"
          onClick={ handleClick('teach') }
          >
          teach
        </button>
      );
    }
  };

  return (
    <ul className="navigation-links">
      <li>
        { teachOrUpload() }
      </li>
      <li className="to-profile nth-nav-link navigation-text">
        <Link
          to={ "/profile/" + currentUser.id }
        >
          { currentUser.username }
        </Link>
      </li>
      <li className="logout navigation-text">
        <Link
          to="/library"
          onClick={ logout }
        >
          log out
        </Link>
      </li>
    </ul>
  );
};
