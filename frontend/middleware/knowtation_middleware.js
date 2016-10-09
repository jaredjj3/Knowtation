import {
  REQUEST_ALL_KNOWTATIONS,
  UPDATE_KNOWTATION,
  receiveKnowtation,
  receiveAllKnowtations
} from '../actions/knowtation_actions';
import {
  requestAllKnowtations,
  updateKnowtation
} from '../util/knowtation_api_util';
import { receiveErrors } from '../actions/errors_actions';

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

    case UPDATE_KNOWTATION:
      onSuccess = knowtation => {
        dispatch(receiveKnowtation(knowtation));
      };
      updateKnowtation(onSuccess, onError);
      return next(action);

    default:
      return next(action);
  }

};

export default KnowtationMiddleware;
