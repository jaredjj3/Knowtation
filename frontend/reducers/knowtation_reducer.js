import { RECEIVE_ALL_KNOWTATIONS } from '../actions/knowtation_actions';

const KnowtationReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_KNOWTATIONS:
      return action.knowtations;

    default:
      return state;
  }
};


export default KnowtationReducer;
