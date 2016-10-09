import React from 'react';

export default ({ props }) => {
  const { clearErrors, toggleModal } = props;

  const handleClick = modal => {
    return () => {
      clearErrors();
      toggleModal(modal);
    };
  };

  return (
    <ul className="navigation-links">
      <li>
        <button
          className="main-button"
          onClick={ handleClick('signup') }
        >
        Sign up
      </button>
      </li>
      <li
        className="nth-nav-link"
        to="/login"
        onClick={ handleClick('login') }
      >
        Log In
      </li>
    </ul>
  );
};
