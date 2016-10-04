import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';




const configureStore = () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
  }

  return (
    createStore(
      RootReducer,
      preloadedState,
      RootMiddleware
    )
  );
};

export default configureStore;
