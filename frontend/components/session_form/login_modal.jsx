import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import Icon from '../icon';
import style from '../../util/modal_style';
import ErrorItems from './error_items';

const LoginModal = ({ props }) => {
  const {
    sessionErrors,
    usernameErrors,
    passwordErrors,
    loginModalOn
  } = props;

  const handleClickOut = () => {
    if (props.sessionModalOn) {
      props.toggleModal('login');
    }
  };

  const loginAsGuest = guestType => {
    return ( e => {
      props.login({ user: {
        username: `guest_${guestType}`,
        password: 'password'
      }});
    });
  };

  handleSubmit(formType) {
    const { clearErrors, login } = props;
    const user = this.state;

    return e => {
      e.preventDefault();
      clearErrors();
      login();
    };
  }

  return (
    <Modal
      className="form-container group"
      isOpen={ loginModalOn }
      onRequestClose={ handleClickOut }
      style={ style }
    >
      <Icon />
      <h1 className="logo">Knowtation</h1>
      <form onSubmit={ handleSubmit } className="session-form">
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
      { this._guestStudentLogin() }
      { this._guestTeacherLogin() }
      </form>
      { this._redirectMessage() }
    </Modal>
  );
};
