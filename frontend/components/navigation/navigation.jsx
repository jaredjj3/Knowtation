import React from 'react';
import { Link } from 'react-router';
import NotLoggedInButtons from './not_logged_in_buttons';
import LoggedInButtons from './logged_in_buttons';

class Navigation extends React.Component {

  render() {
    const { currentUser } = this.props;

    if (currentUser) {
      return <LoggedInButtons props={ this.props }/>;
    } else {
      return <NotLoggedInButtons props={ this.props }/>;
    }
  }
}

export default Navigation;
