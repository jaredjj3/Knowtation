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
      <header id='navigation-bar' className='navigation-bar'>
        <nav className='navigation-items'>

          <div className='navigation-left'>
            <Link to="/library"><h1 className='navigation logo'>Knowtation <Icon /></h1></Link>
          </div>

          <div className='navigation-center'>
            <a href="http://jaredjohnson.me/"><i className="fa fa-user" aria-hidden="true"></i></a>
            <a href="https://github.com/jaredjj3"><i className="fa fa-github" aria-hidden="true"></i></a>
            <a href="http://linkedin.com/in/jjohnsoneit"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
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
