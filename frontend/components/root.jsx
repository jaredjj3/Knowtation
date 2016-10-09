import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Faq from './footer/faq';
import Privacy from './footer/privacy';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import Footer from './footer/footer';
import TeachFormContainer from './teach_form/teach_form_container';
import ProfileContainer from './profile/profile_container';
import NewKnowtationContainer from './knowtation/new_knowtation_container';
import LibraryContainer from './knowtation/library_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/library');
    }
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser || currentUser.userType === 'teacher') {
      replace('/library');
    }
  };

  const _redirectToLibrary = (nextState, replace) => {
    if (nextState.location.pathname === "/") {
      replace('/library');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={ App } onEnter={ _redirectToLibrary }>

          <Route
            path="login"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }
          />

          <Route
            path="signup"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }
          />

          <Route
            path="library"
            component={ LibraryContainer }
          />

          <Route
            path="faq"
            component={ Faq }
          />

          <Route
            path="privacy"
            component={ Privacy }
          />

          <Route
            path="teach"
            component={ TeachFormContainer }
            onEnter={ _redirectIfLoggedOut }
          />

          <Route
            path="profile/:id"
            component={ ProfileContainer }
          />

          <Route
            path="knowtation/new"
            component={ NewKnowtationContainer }
          />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
