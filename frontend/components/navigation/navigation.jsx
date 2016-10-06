import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(modalOn, modalName) {
    const clearErrors = () => this.props.clearErrors;
    const toggleModal = () => this.props.toggleModal(modalName);
    return () => {
      clearErrors();
      if (!modalOn) {
        toggleModal();
      }
    };
  }

  render() {
    const {
      currentUser,
      logout,
      sessionModalOn,
      teachModalOn
     } = this.props;

    if (currentUser) {
      // Links the users see when they are logged in
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
          <li>
            <Link
              className="main-button"
              to={ linkPath }
              onClick={ this.handleOnClick(teachModalOn, 'teach') }
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
    } else {

      // Links the users see when they are not logged in
      return (
        <ul className="navigation-links">
          <li>
            <Link
              className="main-button"
              to="/signup"
              onClick={ this.handleOnClick(sessionModalOn, 'session') }
            >
            Sign up
            </Link>
          </li>
          <li className="nth-nav-link">
            <Link
              to="/login"
              onClick={ this.handleOnClick(sessionModalOn, 'session') }
            >
              Log In
            </Link>
          </li>
        </ul>
      );
    }
  }
}

export default Navigation;
