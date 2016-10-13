import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Faq from './footer/faq';
import Privacy from './footer/privacy';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import TeachFormContainer from './teach_form/teach_form_container';
import ProfileContainer from './profile/profile_container';
import LibraryContainer from './knowtation/library_container';
import KnowtationContainer from './knowtation/knowtation_container';
import KnowtationEditorContainer from './knowtation/knowtation_editor_container';
import KnowtationPreviewContainer from './knowtation/knowtation_preview_container';


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
            path="faq"
            component={ Faq }
          />

          <Route
            path="library"
            component={ LibraryContainer }
          />

          <Route
            path="privacy"
            component={ Privacy }
          />

          <Route
            path="profile/:id"
            component={ ProfileContainer }
          />

          <Route
            path="knowtation/:id/edit"
            component={ KnowtationEditorContainer }
          />

          <Route
            path="knowtation/:id/preview"
            component={ KnowtationPreviewContainer }
          />

          <Route
            path="knowtation/:id"
            component={ KnowtationContainer }
          />


        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
