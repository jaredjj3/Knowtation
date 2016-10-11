import {
  RECEIVE_KNOWTATION,
  SET_ELEMENT
} from '../actions/knowtation_actions';
import * as _ from 'lodash';

const _nullKnowtation = Object.freeze({
  id: null,
  userId: null,
  videoUrl: null,
  videoElement: null,
  canvasElement: null,
  notationImageUrl: null,
  scrollInstructions: []
});

const KnowtationReducer = (state = _nullKnowtation, action) => {
  Object.freeze(state);
  const newState = _.merge({}, state);

  switch(action.type) {
    case RECEIVE_KNOWTATION:
      _.merge(newState, action.knowtation);
      return newState;

    case SET_ELEMENT:
      newState[`${action.elementName}Element`] = action.element;
      return newState;

    default:
      return state;
  }
};


export default KnowtationReducer;
