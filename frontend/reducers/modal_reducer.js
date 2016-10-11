import { TOGGLE_MODAL } from '../actions/modal_actions';
import * as _ from 'lodash';

const _nullModals = Object.freeze({
  loginModalOn: false,
  signupModalOn: false,
  teachModalOn: false,
  uploadModalOn: false,
  profileModalOn: false
});

const ModalReducer = (state = _nullModals, action) => {
  Object.freeze(state);
  let newState = _.merge({}, state);

  switch(action.type) {
    case TOGGLE_MODAL:
      newState[`${action.modal}ModalOn`] = !newState[`${action.modal}ModalOn`];
      return newState;

    default:
      return state;
  }
};

export default ModalReducer;
