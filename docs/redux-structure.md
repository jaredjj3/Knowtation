#Redux Structure

##Authentication Cycles
###Session API Request Actions
  * `signUp`
    0. invoked from `AuthForm` `onSubmit`
    0. a `POST` request is sent to `/api/users`
    0. `receiveCurrentUser` is the success callback
  * `logIn`
    0. invoked from `AuthForm` `onSubmit`
    0. a `POST` request is sent to `/api/session`
    0. `receiveCurrentUser` is the success callback
    0. a successful response includes the `username` and `sessionToken`
  * `logOut`
    0. invoked from `Navbar` `onClick`
    0. a `DELETE` request is sent to `/api/session`
    0. `removeCurrentuser` is the success callback

###Session API Response Actions
  * `receiveCurrentUser`
    0. invoked from `signUp` or `logIn`
    0. the `SessionReducer` stores `currentUser` in the application's state
  * `removeCurrentUser`
    0. invoked from `logOut`
    0. the `SessionReducer` removes `currentUser` from the application's state

##Error Cycles
###Error API Response Actions
  * `receiveErrors`
    0. invoked from `signUp` or `logIn` on  error
    0. the `ErrorReducer` stores the `form` in the application state and maps the `errors` to their respective `form`s
  * `removeErrors`
    0. invoked from `signUp` or `logIn` on success
    0. the `ErrorReducer` removes the `errors` for a given `form` in the application state

##Knowtation Cycles
###Knowtation API Request Actions
  * `fetchAllKnowtation`
    0. invoked from `KnowtationIndex`
    0. a `GET` request is sent to `/api/knowtation`
    0. `receiveAllKnowtation` is the success callback
  * `createKnowtation`
    0. invoked from the upload button `onSubmit`
    0. a `POST` request is sent to `/api/knowtation/:knowtationId`
    0. `receiveSingleKnowtation` is the success callback
  * `fetchSingleKnowtation`
    0. invoked from `Knowtation` after `componentDidMount`
    0. a `GET` request is sent to `/api/knowtation/:knowtationId`
    0. `receiveSingleKnowtation` is the success callback
  * `updateKnowtation`
    0. invoked from edit knowtation button `onSubmit`
    0. a `PATCH` request is sent to `/api/knowtation/:knowtationId`
  * `destroyKnowtation`
    0. invoked from delete knowtation button `onSubmit`
    0. a `DELETE` request is sent to `/api/knowntation/:knowtationId`
    0. `removeKnotation` is the succes callback

###Knowtation API Response Actions
  * `receiveAllKnowtation`
    0. invoked from `fetchAllKnowtation` on success
    0. the `KnowtationReducer` updates `knowtation` in the application state
  * `receiveSingleKnowtation`
    0. invoked from `fetechSingleKnowtation` on success
    0. the `KnowtationReducer` updates `knowtation` in the application state
  * `removeKnowtation`
    0. invoked from `destroyKnowtation` on success
    0. the `KnowtationReducer` removes `knowtation` from the application state
