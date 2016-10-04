json.partial! "api/shared/errors",
  sessionErrors: [],
  usernameErrors: @user.errors.full_messages,
  passwordErrors: @user.errors.full_messages
