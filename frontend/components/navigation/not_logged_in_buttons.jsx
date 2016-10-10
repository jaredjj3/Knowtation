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
      <li className="nth-nav-link">
        <button
          className="main-button"
          onClick={ handleClick('signup') }
        >
        Sign up
      </button>
    </li>
      <li
        onClick={ handleClick('login') }
        className='navigation-text'
      >
        Log In
      </li>
    </ul>
  );
};
