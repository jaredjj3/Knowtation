## Sample State

```js
{
  user: {
    username: "test_username",
    password: "starwars123"
  },
  currentUser: {
    id: 1,
    username: "null"
  },
  session: {
    sessionToken: "adfknnJAs23jiasd"
  }
  forms: {
    signUp: { errors: ["username already taken"] },
    logIn: { errors: [] },
    createKnowtation: { errors: [] }
  },
  knowtation: {
    1: {
      title: "Happy Birthday",
      video: "base64 encoded string",
      notationImage: "base64 encoded string",
      notation: [
        { position: 0, timeSlice: 212939 },
        { position: 120, timeSlice: 213442 },
        { position: 400, timeSlice: 219281 },
        { position: 0, timeSlice: 220392 }
      ],
      timeStart: 2132134990
      artistId: 1,
      tags: [
        { id: 1, name: "Beginner" },
        { id: 2, name: "Acoustic" }
      ]
    }
  }
}
```
