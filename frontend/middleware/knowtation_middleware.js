import {
  REQUEST_ALL_KNOWTATIONS,
  UPDATE_KNOWTATION,
  CREATE_KNOWTATION,
  REQUEST_KNOWTATION,
  receiveKnowtation,
  receiveAllKnowtations,
  setSyncPoint
} from '../actions/knowtation_actions';
import {
  requestAllKnowtations,
  updateKnowtation
} from '../util/knowtation_api_util';
import {
  createKnowtation,
  requestKnowtation
} from '../util/knowtation_api_util';
import { toggleModal } from '../actions/modal_actions';
import { receiveErrors } from '../actions/errors_actions';
import { hashHistory } from 'react-router';

const KnowtationMiddleware = ({ getState, dispatch}) => next => action => {
  const onError = messages => {
    const errorMessages = messages.responseJSON;
    dispatch(receiveErrors(errorMessages));
  };
  let onSuccess;

  switch(action.type) {

    case REQUEST_ALL_KNOWTATIONS:
      onSuccess = knowtations => {
        dispatch(receiveAllKnowtations(knowtations));
      };
      requestAllKnowtations(onSuccess, onError);
      return next(action);

    case REQUEST_KNOWTATION:
      onSuccess = knowtation => {
        dispatch(receiveKnowtation(knowtation));
        dispatch(setSyncPoint());
      };
      requestKnowtation(action.id, onSuccess, onError);
      return next(action);

    case UPDATE_KNOWTATION:
      onSuccess = knowtation => {
        dispatch(receiveKnowtation(knowtation));
      };
      updateKnowtation(action.knowtation, onSuccess, onError);
      return next(action);

    case CREATE_KNOWTATION:
      onSuccess = knowtation => {
        if (getState().modal.uploadModalOn) {
          dispatch(toggleModal('upload'));
        }
        dispatch(receiveKnowtation(knowtation));

        hashHistory.push(`/knowtation/${ knowtation.id }/edit`);
      };
      createKnowtation(action.formData, onSuccess, onError);
      return next(action);

    default:
      return next(action);
  }

};

export default KnowtationMiddleware;
