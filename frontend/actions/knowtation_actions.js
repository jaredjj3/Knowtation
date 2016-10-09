export const REQUEST_ALL_KNOWTATIONS = "REQUEST_ALL_KNOWTATIONS";
export const RECEIVE_ALL_KNOWTATIONS = "RECEIVE_ALL_KNOWTATIONS";
export const UPDATE_KNOWTATION = "UPDATE_KNOWTATION";
export const RECEIVE_KNOWTATION = "RECEIVE_KNOWTATION";

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
