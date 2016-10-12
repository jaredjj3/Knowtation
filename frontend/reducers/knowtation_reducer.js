import {
  RECEIVE_KNOWTATION,
  SET_ELEMENT,
  TOGGLE_PLAYING,
  UPDATE_TIME,
  SET_DURATION,
  SET_ATTRIBUTE,
  CREATE_SYNC_POINT,
  DELETE_SYNC_POINT
} from '../actions/knowtation_actions';
import * as _ from 'lodash';

const _nullKnowtation = Object.freeze({
  id: null,
  img: null,
  ctx: null,
  source: null,
  canvas: null,
  userId: null,
  duration: null,
  videoUrl: null,
  isPlaying: false,
  destination: null,
  syncPointId: 1,
  currentTime: 0,
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
      newState.syncPointId++;
      return newState;

    case DELETE_SYNC_POINT:
      newState.scrollInstructions = newState.scrollInstructions.filter( syncPoint => (
        parseInt(syncPoint.id) !== parseInt(action.id)
      ));
      return newState;

    default:
      return state;
  }
};


export default KnowtationReducer;
