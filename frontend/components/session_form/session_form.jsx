import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import Icon from '../icon';
import style from '../../util/modal_style';
import ErrorItems from './error_items';


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
    this.handleLinkClick = this.handleLinkClick.bind(this);

    this._submitText = this._submitText.bind(this);
    this._guestStudentLogin = this._guestStudentLogin.bind(this);
    this._guestTeacherLogin = this._guestTeacherLogin.bind(this);
    this._redirectMessage = this._redirectMessage.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const {
      sessionErrors,
      usernameErrors,
      passwordErrors,
      loginModalOn,
      signupModalOn
    } = this.props;

    return (
      <Modal
        className="form-container group"
        isOpen={ loginModalOn || signupModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <Icon />
        <h1 className="logo">Knowtation</h1>
        <form onSubmit={ this.handleSubmit } className="session-form">
          <ErrorItems errors={ sessionErrors }/>
          <ErrorItems errors={ usernameErrors }/>
          <input
            className="username form-input-field"
            onChange={ this.handleOnChange("username") }
            type="text"
            value={ this.state.username }
            placeholder="username"
          />
          <ErrorItems errors={ passwordErrors }/>
          <input
            className="password form-input-field"
            onChange={ this.handleOnChange("password") }
            type="password"
            value={ this.state.password }
            placeholder="password"
          />
        <input
          className="form-submit"
          type="submit"
          value={ this._submitText() }
        />
        </form>
        { this._guestStudentLogin() }
        { this._guestTeacherLogin() }
        { this._redirectMessage() }
      </Modal>
    );
  }

  // event handlers

  handleClickOut() {
    const { loginModalOn, signupModalOn } = this.props;

    if (loginModalOn) {
      this.props.toggleModal('login');
    }

    if (signupModalOn) {
      this.props.toggleModal('signup');
    }
  }

  loginAsGuest(guestType) {
    const self = this;

    return ( e => {
      self.props.login({ user: {
        username: `guest_${guestType}`,
        password: 'password'
      }});
      self.redirectIfLoggedIn();
    });
  }

  redirectIfLoggedIn() {
    const { currentUser, loginModalOn, signupModalOn } = this.props;

    if (currentUser) {

      if (loginModalOn) {
        this.props.toggleModal('login');
      }

      if (signupModalOn) {
        this.props.toggleModal('signup');
      }

      hashHistory.push(`/profile/${currentUser.id}`);
    }
  }

  handleOnChange(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    const { clearErrors, login, signup, formType } = this.props;
    const callback = formType === 'login' ? login : signup;
    const user = { user: this.state };
    e.preventDefault();
    clearErrors();
    callback(user);
    this.redirectIfLoggedIn();
  }

  handleLinkClick() {
    const { toggleModal, clearErrors } = this.props;
    clearErrors();
    toggleModal('login');
    toggleModal('signup');
  }

  // private

  _redirectMessage() {
    const { formType, clearErrors } = this.props;

    if (formType === 'login') {
      return (
        <div className="form-redirect-container">
          <p>Don't have an account?</p>
          <span onClick={ this.handleLinkClick }>Sign Up</span>
        </div>
      );
    } else if (formType === 'signup') {
      return (
        <div className="form-redirect-container">
          <p>Already have an account?</p>
          <span onClick={ this.handleLinkClick }>Log In</span>
        </div>
      );
    }
  }

  _submitText() {
    const { formType } = this.props;

    if (formType === 'login') {
      return 'Log In';
    } else if (formType === 'signup') {
      return 'Sign Up';
    }
  }

  _guestStudentLogin() {
    const { formType } = this.props;

    if (formType === 'login') {
      return (
        <input
          className="form-submit"
          onClick={ this.loginAsGuest('student') }
          type="button"
          value="Guest Student Login"
        />
      );
    } else if (formType === 'signup') {
      return "";
    }
  }

  _guestTeacherLogin() {
    const { formType } = this.props;

    if (formType === 'login') {
      return (
        <input
          className="form-submit"
          onClick={ this.loginAsGuest('teacher') }
          type="button"
          value="Guest Teacher Login"
        />
      );
    } else if (formType === 'signup') {
      return "";
    }
  }

}

export default SessionForm;
