import React from 'react';
import { Link } from 'react-router';
import NotLoggedInButtons from './not_logged_in_buttons';
import LoggedInButtons from './logged_in_buttons';
import Icon from '../icon';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.navBarButtons = this.navBarButtons.bind(this);
  }

  render() {
    return (
      <header className='navigation-bar group'>
        <nav className='navigation-items'>

          <div className='navigation-left'>
            <Link to="/library"><h1 className='navigation logo'>Knowtation</h1></Link>
            <Link to="/library"><Icon /></Link>
          </div>

          <div className='navigation-right'>
            { this.navBarButtons() }
          </div>
        </nav>
      </header>
    );
  }

  // helpers

  navBarButtons() {
    const { currentUser } = this.props;
     if (currentUser) {
      return <LoggedInButtons props={ this.props }/>;
    } else {
      return <NotLoggedInButtons props={ this.props }/>;
    }
  }
}



export default Navigation;
