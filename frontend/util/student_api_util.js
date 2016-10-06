export const sendApplication = (user, application, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/teachers',
    data: { application },
    success,
    error
  });
};
