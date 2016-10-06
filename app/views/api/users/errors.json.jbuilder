username_errors = @user.errors.messages[:username]
username_errors = username_errors.nil? ? [] : username_errors
password_errors = @user.errors.messages[:password]
password_errors = password_errors.nil? ? [] : password_errors

json.partial! "api/shared/errors",
  sessionErrors: [],
  usernameErrors: username_errors,
  passwordErrors: password_errors,
  teacherErrors: []
