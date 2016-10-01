## Component Hierarchy

### HomeContainer
  * Navbar
    * sessionToken
    * username
    * userType

  * KnowtationIndex
    * title
    * artist
    * thumbnail
    * rating
    * tags
    * RECEIVE_KNOWTATION

### AuthFormContainer
  * AuthForm
    * username
    * password
    * sessionToken
    * errors
    * RECEIVE_CURRENT_USER
    * RECEIVE_ERRORS
    * LOGIN
    * SIGNUP

### UserProfileContainer
  * Navbar
    * sessionToken
    * username
    * userType

  * UserProfile
    * username
    * country
    * sessionToken
    * bio
    * profilePicture

  * Activity
    * loops

  * SavedKnowtation
    * title
    * artist
    * thumbnail
    * rating
    * tags
    * RECEIVE_KNOWTATION

### KnowtationContainer
  * Video
  * Notation

## Routes
| **Path**                    | **Component**             |
| "/"                         | "HomeContainer"           |
| "/signup"                   | "AuthFormContainer"       |
| "/login"                    | "AuthFormContainer"       |
| "/knowtation/:knowtationId" | "KnowtationContainer"     |
| "/upload"                   | "NewKnowtationContainer"  |
