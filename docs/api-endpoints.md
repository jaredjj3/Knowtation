#API Endpoints
##HTML API
###Root
  * `GET /`
    * shows all knowtation videos

##JSON API
###Users
  * `POST /api/users`
  * `PATCH /api/users`
  * `GET /api/users/:userId`

###Session
  * `POST /api/session`
  * `DELETE /api/session`
  * `GET /api/session`

##Knowtation
  * `POST /api/knowtation/new`
  * `GET /api/knowtation/:knowtationId`
  * `PATCH /api/knowtation/:knowtationId`
  * `DELETE /api/knowtation/:knowtationId`

##Tags
  * `GET /api/tags`
  * `POST /api/knowtation/:knowtationId/tags`
  * `DELETE /api/knowtation/:knowtationId/tags/:tagId`
