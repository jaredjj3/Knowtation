import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav>
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign up</Link></li>
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

const Greeting = ({ currentUser, logout }) => {
  debugger
  if (currentUser) {
    return greeting(currentUser, logout);
  } else {
    return sessionLinks()
  }
}

export default Greeting;
