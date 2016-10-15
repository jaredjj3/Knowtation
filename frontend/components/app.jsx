import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';
import Footer from './footer/footer';
import SessionFormContainer from './session_form/session_form_container';
import TeachFormContainer from './teach_form/teach_form_container';
import UploadFormContainer from './upload_form/upload_form_container';
import ProfileFormContainer from './profile_form/profile_form_container';
import TimeFormContainer from './time_form/time_form_container';
import LoadingContainer from './loading/loading_container';

const App = ({ children }) => (

  <div className='application-container'>

    <NavigationContainer className="navigation-container" />

    <SessionFormContainer />
    <TeachFormContainer />
    <UploadFormContainer />
    <ProfileFormContainer />
    <TimeFormContainer />
    <LoadingContainer />

    { children }

    <Footer />
  </div>
);

export default App;
