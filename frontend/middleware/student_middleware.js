import { SEND_APPLICATION } from '../actions/student_actions';
import { receiveErrors, clearErrors } from '../actions/errors_actions';
import { sendApplication } from '../util/student_api_util';
import { toggleModal } from '../actions/modal_actions';

const StudentMiddleware = ({ getState, dispatch }) => next => action => {
  const onSuccess = () => {
    dispatch(clearErrors());
    dispatch(toggleModal('teach'));
  };

  const onError = messages => {
    const errorMessages = messages.responseJSON;
    dispatch(receiveErrors(errorMessages));
  };

  const user = getState().session.currentUser;

  switch(action.type) {
    case SEND_APPLICATION:
      if (user) {
        sendApplication(user, action.application, onSuccess, onError);
      }
      return next(action);

    default:
      return next(action);

  }
};

 export default StudentMiddleware;
