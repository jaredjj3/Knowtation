import {
  REQUEST_ALL_KNOWTATIONS,
  receiveAllKnowtations
} from '../actions/knowtation_actions';
import { requestAllKnowtations } from '../util/knowtation_api_util';
import { receiveErrors } from '../actions/errors_actions';

const KnowtationMiddleware = ({ getState, dispatch}) => next => action => {
  const onError = messages => {
    const errorMessages = messages.responseJSON;
    dispatch(receiveErrors(errorMessages));
  };

  switch(action.type) {

    case REQUEST_ALL_KNOWTATIONS:
      const onSuccess = knowtations => {
        dispatch(receiveAllKnowtations(knowtations));
      };
      requestAllKnowtations(onSuccess, onError);
      return next(action);

    default:
      return next(action);
  }

};

export default KnowtationMiddleware;
