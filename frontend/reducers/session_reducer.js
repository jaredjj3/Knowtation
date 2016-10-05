import { RECEIVE_CURRENT_USER, TOGGLE_MODAL, LOGOUT } from '../actions/session_actions';
import * as _ from 'lodash';

const _nullSession = Object.freeze({
  currentUser: null,
  modalOn: false
});

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      return _.merge({}, state, { currentUser: action.currentUser });

    case LOGOUT:
      return _.merge({}, _nullSession);

    case TOGGLE_MODAL:
      return _.merge({}, state, { modalOn: true });

    default:
      return state;
  }
};

export default SessionReducer;
