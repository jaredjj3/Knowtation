import { configureStore } from 'react-redux';

const createStore = (preloadedState = {}) => (
  configureStore(
    preloadedState
  )
);

export default createStore;
