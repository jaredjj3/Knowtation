export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_USER = "CLEAR_USER";
export const REQUEST_USER = "REQUEST_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_WITH_IMAGE = "UPDATE_USER_WITH_IMAGE";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const clearUser = () => ({
  CLEAR_USER
});

export const requestUser = id => ({
  type: REQUEST_USER,
  id
});

export const updateUser = user => ({
  type: UPDATE_USER,
  user
});

export const updateUserWithImage = (formData, id) => ({
  type: UPDATE_USER_WITH_IMAGE,
  formData,
  id
});
