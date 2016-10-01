#Redux Structure

##Authentication Cycles
###Session API Request Actions
* `signUp`
  0. invoked from `AuthForm` `onSubmit`
  0. a `POST` request is sent to `/api/users`
  0. `receiveCurrentUser` is the success callback
  0. `receiveErrors` is the error callback
* `logIn`
  0. invoked from `AuthForm` `onSubmit`
  0. a `POST` request is sent to `/api/session`
  0. `receiveCurrentUser` is the success callback
  0. `receiveErrors` is the error callback
  0. a successful response includes the `username` and `sessionToken`
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. a `DELETE`
