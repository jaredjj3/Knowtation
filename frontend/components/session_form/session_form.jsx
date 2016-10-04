import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(property) {
    return e => this.setState({
      [property]: e.currentTaget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user })
  }


  render() {
    return (
      <form>
        <label>Username <input onChange={ this.handleOnChange("username") } type="text" value={ this.state.username }></label>
        <label>Password <input onChange={ this.handleOnChange("password") } type="password" value={ this.state.password }></label>
        <input type="button" value="Submit">
      </form>
    );
  }

}

export default SessionForm;
