import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';
import Footer from './footer/footer';
import Icon from './icon';
import SessionFormContainer from './session_form/session_form_container';
import TeachFormContainer from './teach_form/teach_form_container';
import UploadFormContainer from './upload_form/upload_form_container';

const App = ({ children }) => (

  <div className='application-container'>

    <header className='navigation-bar group'>
      <nav className='navigation-items group'>
        <div className='logo-container'>
          <Link to="/library"><h1 className='logo'>Knowtation</h1></Link>
          <Link to="/library"><Icon /></Link>
        </div>
        <NavigationContainer className="navigation-container" />
      </nav>
    </header>

    <SessionFormContainer />
    <TeachFormContainer />
    <UploadFormContainer />

    { children }

    <Footer />
  </div>
);

export default App;
