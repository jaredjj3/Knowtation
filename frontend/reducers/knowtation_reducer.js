import {
  RECEIVE_KNOWTATION,
  SET_ELEMENT,
  TOGGLE_PLAYING,
  UPDATE_TIME,
  SET_DURATION,
  SET_ATTRIBUTE,
  CREATE_SYNC_POINT
} from '../actions/knowtation_actions';
import * as _ from 'lodash';

const _nullKnowtation = Object.freeze({
  id: null,
  userId: null,
  videoUrl: null,
  isPlaying: false,
  img: null,
  ctx: null,
  canvas: null,
  currentTime: null,
  duration: null,
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
      newState.isPlaying = !newState.isPlaying;
      return newState;

    case UPDATE_TIME:
      newState.currentTime = action.currentTime;
      return newState;

    case SET_DURATION:
      newState.duration = action.duration;
      return newState;

    case SET_ATTRIBUTE:
      newState[`${action.attribute}`] = action.value;
      return newState;

    case CREATE_SYNC_POINT:
      newState.scrollInstructions.push(action.syncPoint);
      return newState;

    default:
      return state;
  }
};


export default KnowtationReducer;
