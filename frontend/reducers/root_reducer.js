import { combineReducers } from 'redux';
import KnowtationsReducer from './knowtations_reducer';
import KnowtationReducer from './knowtation_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ModalReducer from './modal_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  knowtations: KnowtationsReducer,
  knowtation: KnowtationReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  modal: ModalReducer,
  user: UserReducer
});

export default RootReducer;
