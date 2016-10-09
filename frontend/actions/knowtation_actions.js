export const REQUEST_ALL_KNOWTATIONS = "REQUEST_ALL_KNOWTATIONS";
export const RECEIVE_ALL_KNOWTATIONS = "RECEIVE_ALL_KNOWTATIONS";

export const requestAllKnowtations = () => ({
  type: REQUEST_ALL_KNOWTATIONS
});

export const receiveAllKnowtations = knowtations => ({
  type: RECEIVE_ALL_KNOWTATIONS,
  knowtations
});
