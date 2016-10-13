export const REQUEST_ALL_KNOWTATIONS = "REQUEST_ALL_KNOWTATIONS";
export const RECEIVE_ALL_KNOWTATIONS = "RECEIVE_ALL_KNOWTATIONS";
export const UPDATE_KNOWTATION = "UPDATE_KNOWTATION";
export const RECEIVE_KNOWTATION = "RECEIVE_KNOWTATION";
export const CREATE_KNOWTATION = "CREATE_KNOWTATION";
export const REQUEST_KNOWTATION = "REQUEST_KNOWTATION";
export const SET_ELEMENT = "SET_HTML_ELEMENT";
export const TOGGLE_ATTRIBUTE = "TOGGLE_ATTRIBUTE";
export const UPDATE_TIME = "UPDATE_TIME";
export const SET_DURATION = "SET_DURATION";
export const SET_ATTRIBUTE = "SET_ATTRIBUTE";
export const CREATE_SYNC_POINT = "CREATE_SYNC_POINT";
export const DELETE_SYNC_POINT = "DELETE_SYNC_POINT";
export const UPDATE_POSITION = "UPDATE_POSITION";
export const SET_SYNC_POINT = "SET_SYNC_POINT";

export const requestAllKnowtations = () => ({
  type: REQUEST_ALL_KNOWTATIONS
});

export const receiveAllKnowtations = knowtations => ({
  type: RECEIVE_ALL_KNOWTATIONS,
  knowtations
});

export const updateKnowtation = knowtation => ({
  type: UPDATE_KNOWTATION,
  knowtation
});

export const receiveKnowtation = knowtation => ({
  type: RECEIVE_KNOWTATION,
  knowtation
});

 export const createKnowtation = formData => ({
   type: CREATE_KNOWTATION,
   formData
 });

 export const requestKnowtation = id => ({
   type: REQUEST_KNOWTATION,
   id
 });

export const setElement = (element, elementName) => ({
  type: SET_ELEMENT,
  element,
  elementName
});

export const toggleAttribute = attribute => ({
  type: TOGGLE_ATTRIBUTE,
  attribute
});

export const updateTime = currentTime => ({
  type: UPDATE_TIME,
  currentTime
});

export const setDuration = duration => ({
  type: SET_DURATION,
  duration
});

export const setAttribute = (attribute, value) => ({
  type: SET_ATTRIBUTE,
  attribute,
  value
});

export const createSyncPoint = syncPoint => ({
  type: CREATE_SYNC_POINT,
  syncPoint
});

export const deleteSyncPoint = id => ({
  type: DELETE_SYNC_POINT,
  id
});

export const updatePosition = position => ({
  type: UPDATE_POSITION,
  position
});

export const setSyncPoint = () => ({
  type: SET_SYNC_POINT
});
