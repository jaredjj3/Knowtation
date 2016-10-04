import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

success = response => console.log(response);
error = response => console.log(response);

export const login = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    success,
    error
  });
};

export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    success,
    error
  });
};
