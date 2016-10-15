#Knowtation

[Heroku Link](http://knowtation.herokuapp.com/)

##Minimum Viable Product
Knowtation is a modern web application inspired by [InstantNotation](http://instantnotation.com). Guitar teachers are able to effectively communicate lessons to students through synchronized video and music notation. By the end of Week 9, `Knowtation` will satisfy the following criteria:

###Key Features
  * Account creation, login, and guest login
  * `Knowtation` creation
  * A custom `Knowtation` player that optimizes the learning experience
  * Tags
  * Profile

###General Features
  * Bug free navigation
  * Adequate seed data
  * Sufficient CSS styling
  * Hosting on Heroku

###Bonus Features
  * Infinite Scroll
  * Search/filter feature

##Design Documents
  * [View Wireframes](./wireframes/)
  * [React Components](./component-heirarchy.md)
  * [API endpoints](./api-endpoints.md)
  * [Database Schema](./schema.md)
  * [Redux Structure](./redux-structure.md)
  * [Sample State](./sample-state.md)

##Implementation Timeline

###Phase 1: Backend setup and Front End user Authentication (2 days)
**Objective**: Functioning rails project with front-end Authentication
  - [x] New Rails project
  - [x] CSS Reset
  - [x] `User` model
  - [x] Back end authentication (session/password)
  - [x] `StaticPages` controller and root view
  - [x] Webpack & react/redux modules
  - [x] `APIUtil` to interact with the API
  - [x] Redux cycle for frontend Authentication
  - [x] User signup/login components
  - [x] Style signup/login components
  - [x] Seed users
  - [x] Review phase 1

###Phase 2: Navigation and Static Footer Pages (0.5 days)
**Objective**: Setup the navigation and static footer pages
  - [x] Navigation bar
  - [x] Application for teacher account
  - [x] Footer FAQ, Privacy Policy, ~~Terms of Use~~ views
  - [x] Routing to root, Sign up, login, FAQ, Privacy Policy, Terms of Use, Instagram, and Youtube views
  - [x] Style navigation and footer bars
  - [x] Style teacher application
  - [x] Review of phase 2

###Phase 3: User profile setup (1 day)
**Objective**: Upon successful login or setup, the user should be redirected to their own profile, which will show them their bio, progress, and saved videos.
  - [x] `User` JBuilder show view for teachers and students
  - [x] Google Charts integration
  - [x] Style the show page
  - [x] Review phase 3

###Phase 4: `Knowtation CRUD` (2.5 days)
**Objective**: `Knowtation` can be created, read, edited, and destroyed through the API
  - [x] `Knowtation` model
  - [x] Seed database with test data
  - [x] CRUD API for `Knowtation` `KnowtationController`
  - [x] JBuilder views for `Knowtation`
  - [x] Style `Knowtation` components
  - [x] Saving `Knowtation`
  - [x] Review phase 4

###Phase 5: `Knowtation Player` (2 days)
**Objective**: `Knowtation` can be viewed through a custom `Knowtation` player
  - [x] `Knowtation` show page
  - [x] Style `Knowtation` show page
  - [x] Ensure that at least one working `Knowtation` is seeded in db
  - [x] Appropriate routes from index page
  - [x] Custom video player using DOMElements and Event listeners

###Phase 6: Tags (1 day)
**Objective:** `Knowtation` can be tagged with multiple tags and tags are searchable.
  - [x] `Tag` model and `Taggings` join table
  - [ ] Fetching tags for `Knowtation`
  - [ ] Adding tags for `Knowtation`
  - [x] Seed tags
  - [x] Style tags
  - [ ] Review phase 6


### Bonus
  * Seeds
    * transpose the videos/notation from [InstantNotation](http://instantnotation.com).


  * Search/filter
    * Search and filter using tag names, artist names, and `Knowtation` titles
    * Fetching `Knowtation` from search


  * Pagination / infinite scroll for Knowtation Index
    * Paginate Knowtation Index to send 9 results at a time
    * Append next set of results when user scrolls near bottom
    * Style scroll components and transitions


  * Teachers have the option to upload MusicXML and generate notation using VexFlow or any other similar HTML music notation Library.
