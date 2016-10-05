import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionErrorItem from '../error/session_error_item';
import PasswordErrorItem from '../error/password_error_item';
import UsernameErrorItem from '../error/username_error_item';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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
    const { sessionErrors, usernameErrors, passwordErrors } = this.props;


    const usernameErrorsItems = usernameErrors.map((usernameError, idx) => (
      <UsernameErrorItem key={ idx } usernameError={ usernameError }/>
    ));

    const passwordErrorsItems = passwordErrors.map((passwordError, idx) => (
      <PasswordErrorItem key={ idx } passwordError={ passwordError }/>
    ));

    const sessionErrorsItems = sessionErrors.map((sessionError, idx) => (
      <SessionErrorItem key={ idx } sessionError={ sessionError }/>
    ));

    return (
      <div className="session-form-container group">
        <ul className="session-errors">
          { sessionErrorsItems }
        </ul>
        <form onSubmit={ this.handleSubmit } className="session-form">
          <ul className="username-errors">
            { usernameErrorsItems }
          </ul>
          <input className="username session-field" onChange={ this.handleOnChange("username") } type="text" value={ this.state.username } />

            <ul className="password-errors">
              { passwordErrorsItems }
            </ul>
          <input className="password session-field" onChange={ this.handleOnChange("password") } type="password" value={ this.state.password } />
          <input className="session-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default SessionForm;
