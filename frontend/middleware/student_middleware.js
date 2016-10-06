import { SEND_APPLICATION } from '../actions/student_actions';
import { receiveErrors, clearErrors } from '../actions/errors_actions';
import { sendApplication } from '../util/student_api_util';
import { toggleModal } from '../actions/modal_actions';
import { receiveCurrentUser } from '../actions/session_actions';

const StudentMiddleware = ({ getState, dispatch }) => next => action => {
  const user = getState().session.currentUser;

  switch(action.type) {
    case SEND_APPLICATION:
      const onSuccess = updatedUser => {
        dispatch(clearErrors());
        dispatch(toggleModal('teach'));
        dispatch(receiveCurrentUser(updatedUser));
      };

      const onError = messages => {
        const errorMessages = messages.responseJSON;
        dispatch(receiveErrors(errorMessages));
      };
      if (user) {
        sendApplication(user, action.application, onSuccess, onError);
      }
      return next(action);

    default:
      return next(action);

  }
};

 export default StudentMiddleware;
