import {
  RECEIVE_KNOWTATION,
  SET_ELEMENT,
  TOGGLE_PLAYING,
  UPDATE_TIME,
  SET_DURATION,
  SET_ATTRIBUTE,
  CREATE_SYNC_POINT,
  DELETE_SYNC_POINT,
  UPDATE_POSITION,
  SET_SYNC_POINT,
  TOGGLE_ATTRIBUTE,
  RESET_KNOWTATION
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
  syncPointId: 1,
  currentTime: 0,
  destination: null,
  playbackSpeed: null,
  notationImageUrl: null,
  scrollInstructions: '[]'
});

const maxId = scrollInstructions => {
  if (scrollInstructions.length === 0) {
    return 0;
  }

  let currentMax = 0;
  for (let i = 0; i < scrollInstructions.length; i++) {
    const { id } = scrollInstructions[i];
    if (parseInt(id) > currentMax) {
      currentMax = id;
    }
  }

  return currentMax + 1;
};

const KnowtationReducer = (state = _nullKnowtation, action) => {
  Object.freeze(state);
  const newState = _.merge({}, state);

  switch(action.type) {
    case RECEIVE_KNOWTATION:
      _.merge(newState, action.knowtation);
      const scrollInstructions = JSON.parse(
        action.knowtation.scrollInstructions
      );
      _.merge(newState, { scrollInstructions });
      return newState;

    case SET_ELEMENT:
      newState[`${action.elementName}Element`] = action.element;
      return newState;

    case TOGGLE_PLAYING:
      newState.isPlaying = !newState.isPlaying;
      return newState;

    case TOGGLE_ATTRIBUTE:
      newState[action.attribute] = !newState[action.attribute];
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

    case UPDATE_POSITION:
      if (newState.destination) {
        newState.destination.pos.x = action.position;
      } else {
        newState.destination = null;
      }
      return newState;

    case SET_SYNC_POINT:
      newState.syncPointId = maxId(newState.scrollInstructions);
      return newState;

    case RESET_KNOWTATION:
      return _nullKnowtation;

    default:
      return state;
  }
};


export default KnowtationReducer;
