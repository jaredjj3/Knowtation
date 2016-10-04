import React from 'react';

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
    return (
      <form>
        <input onChange={ this.handleOnChange("username") } type="text" value={ this.state.username } />
        <input onChange={ this.handleOnChange("password") } type="password" value={ this.state.password } />
        <input onSubmit={ this.handleSubmit } type="submit" value="Submit" />
      </form>
    );
  }

}

export default SessionForm;
