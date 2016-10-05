import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionErrorItem from '../error/session_error_item';
import PasswordErrorItem from '../error/password_error_item';
import UsernameErrorItem from '../error/username_error_item';
import Modal from 'react-modal';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
  }

  handleClickOut() {
    if (this.props.modalOn) {
      this.props.toggleModal();
    }
    hashHistory.push("/");
  }

  loginAsGuest(guestType) {
    const self = this;

    return ( e => {
      self.props.processForm({ user: {
        username: `guest_${guestType}`,
        password: 'password'
      }});
      self.redirectIfLoggedIn();
    });
  }

  redirectIfLoggedIn() {
    if (this.props.currentUser) {
      hashHistory.push("/");
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  // clear errors if leaving the login screen
  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleOnChange(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  render() {
    const { clearErrors, formType, sessionErrors, usernameErrors, passwordErrors, modalOn } = this.props;

    const usernameErrorsItems = usernameErrors.map((usernameError, idx) => (
      <UsernameErrorItem key={ idx } usernameError={ usernameError }/>
    ));

    const passwordErrorsItems = passwordErrors.map((passwordError, idx) => (
      <PasswordErrorItem key={ idx } passwordError={ passwordError }/>
    ));

    const sessionErrorsItems = sessionErrors.map((sessionError, idx) => (
      <SessionErrorItem key={ idx } sessionError={ sessionError }/>
    ));

    let redirectMessage, submitText, guestStudentLogin, guestTeacherLogin;
    if (formType === 'login') {
      redirectMessage = (
        <div className="redirect-container">
          <p>Don't have an account?</p>
          <Link onClick={ clearErrors } to="/signup">Signup</Link>
        </div>
      );
      submitText = 'Login';
      guestStudentLogin = (
        <input
          className="session-submit"
          onClick={ this.loginAsGuest('student') }
          type="button"
          value="Guest Student Login"
        />
      );
      guestTeacherLogin = (
        <input
          className="session-submit"
          onClick={ this.loginAsGuest('teacher') }
          type="button"
          value="Guest Teacher Login"
        />
      );
    } else if (formType === 'signup') {
      redirectMessage = (
        <div className="redirect-container">
          <p>Already have an account?</p>
          <Link onClick={ clearErrors } to="/login">Login</Link>
        </div>
      );
      submitText = 'Signup';
      guestStudentLogin = "";
      guestTeacherLogin = "";
    }

    const style = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(150, 150, 150, 0.80)'
      }
    };

    return (
      <Modal
        className="session-form-container group"
        isOpen={ modalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <img
          className="logo-image"
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
        />
      <h1 className="logo">Knowtation</h1>
        <form onSubmit={ this.handleSubmit } className="session-form">
          <ul className="errors">
            { sessionErrorsItems }
            { usernameErrorsItems }
          </ul>
          <input
            className="username session-field"
            onChange={ this.handleOnChange("username") }
            type="text"
            value={ this.state.username }
            placeholder="username"
          />
        <ul className="errors">
            { passwordErrorsItems }
          </ul>
          <input
            className="password session-field"
            onChange={ this.handleOnChange("password") }
            type="password"
            value={ this.state.password }
            placeholder="password"
          />
        <input className="session-submit" type="submit" value={ submitText } />
        </form>
        { guestStudentLogin }
        { guestTeacherLogin }
        { redirectMessage }

      </Modal>
    );
  }

}

export default SessionForm;
