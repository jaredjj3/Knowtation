export const sendApplication = (user, application, success, error) => {
  $.ajax({
    method: 'POST',
    url '/',
    data: { user, application },
    success,
    error
  });
};
