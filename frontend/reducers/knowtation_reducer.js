import {
  RECEIVE_KNOWTATION,
  SET_ELEMENT,
  TOGGLE_PLAYING
} from '../actions/knowtation_actions';
import * as _ from 'lodash';

const _nullKnowtation = Object.freeze({
  id: null,
  userId: null,
  videoUrl: null,
  isPlaying: false,
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

    case TOGGLE_PLAYING:
      console.log('toggled');
      newState.isPlaying = !newState.isPlaying;
      return newState;

    default:
      return state;
  }
};


export default KnowtationReducer;
