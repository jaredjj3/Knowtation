export const requestAllKnowtations = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/knowtations',
    success,
    error
  });
};
