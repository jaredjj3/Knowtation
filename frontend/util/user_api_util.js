export const requestUser = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    success,
    error
  });
};
