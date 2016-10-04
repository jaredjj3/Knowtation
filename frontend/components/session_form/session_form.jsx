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

  handleOnChange(e) {
    
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user })
  }


  render() {
    return (
      <form>
        <label>Username <input type="text"></label>
        <label>Password <input type="password"></label>
        <input type="button" value="Submit">
      </form>
    );
  }

}

export default SessionForm;
