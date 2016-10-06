import { SEND_APPLICATION } from '../actions/student_actions';
import { receiveErrors, clearErrors } from '../actions/errors_actions';

const StudentMiddleware = ({ getState, dispatch }) => next => action => {
  const onSuccess = response => {
    console.log(response);
  };

  const onError = messages => {
    const errorMessages = messages.responseJSON;
    dispatch(receiveErrors(errorMessages));
  };

  switch(action.type) {
    case SEND_APPLICATION:
      console.log('application sent!');
      return next(action);

    default:
      return next(action);

  }
};
