import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionErrorItem from './session_error_item';

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

    const sessionErrorsItems = sessionErrors.map((sessionError, idx) => (
      <SessionErrorItem key={ idx } sessionError={ sessionError }/>
    ));

    return (
      <div>
        <ul>
          { sessionErrorsItems }
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleOnChange("username") } type="text" value={ this.state.username } />
          <input onChange={ this.handleOnChange("password") } type="password" value={ this.state.password } />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default SessionForm;
