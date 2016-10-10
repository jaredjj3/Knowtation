export const requestAllKnowtations = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/knowtations',
    success,
    error
  });
};

export const updateKnowtation = (knowtation, success, error) => {
  const id = knowtation.id;
  $.ajax({
    method: 'PATCH',
    url: `/api/knowtations/${id}`,
    data: { knowtation },
    success,
    error
  });
};

export const createKnowtation = (formData, callback, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/knowtations',
    data: { formData },
    contentType: false,
    processData: false,
    success: (response => callback(response)),
    error
  });
};
