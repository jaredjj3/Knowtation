export const requestUser = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    success,
    error
  });
};

export const updateUser = (user, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user },
    success,
    error
  });
};
