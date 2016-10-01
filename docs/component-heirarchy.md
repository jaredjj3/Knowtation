## Component Hierarchy

### HomeContainer
  * Navbar
    * `sessionToken`
    * `username`
    * `userId`
    * `userType`

  * KnowtationIndex
    * `title`
    * `knowtationId`
    * `artist`
    * `thumbnail`
    * `rating`
    * `tags`
    * `RECEIVE_KNOWTATIONS`

### AuthFormContainer
  * AuthForm
    * `username`
    * `password`
    * `sessionToken`
    * `errors`
    * `RECEIVE_CURRENT_USER`
    * `RECEIVE_ERRORS`
    * `LOGIN`
    * `SIGNUP`

### UserContainer
  * Navbar
    * `sessionToken`
    * `username`
    * `userType`

  * UserProfile
    * `username`
    * `userId`
    * `country`
    * `sessionToken`
    * `bio`
    * `profilePicture`
    * `EDIT_PROFILE`

  * Activity
    * `loops`

  * SavedKnowtation
    * `title`
    * `artist`
    * `thumbnail`
    * `rating`
    * `tags`
    * `RECEIVE_KNOWTATION`

### KnowtationContainer
  * Knowtation
    * `video`
    * `notation`

## Routes
| **Path** | **Component** |
| ------ | ------ |
| "/" | "HomeContainer" |
| "/signup"| "AuthFormContainer"|
| "/login" | "AuthFormContainer"|
| "/user/:userId" | "UserContainer" |
| "/knowtation/:knowtationId" | "KnowtationContainer" |
| "/knowtation/new"| "NewKnowtationContainer" |
