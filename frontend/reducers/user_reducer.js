import { RECEIVE_USER, CLEAR_USER } from '../actions/user_actions';
import * as _ from 'lodash';

const _nullUser = Object.freeze({
  username: null,
  userType: null,
  bio: null,
  id: -1,
  givenLoops: null,
  profilePictureUrl: null
});

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  const newState = _.merge({}, state);

  switch(action.type) {

    case RECEIVE_USER:
      _.merge(newState, action.user);
      return newState;

    case CLEAR_USER:
      return _nullUser;

    default:
      return state;
  }

};

export default UserReducer;
