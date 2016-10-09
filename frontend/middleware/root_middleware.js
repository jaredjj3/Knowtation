import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import StudentMiddleware from '../middleware/student_middleware';
import UserMiddleware from '../middleware/user_middleware';
import KnowtationMiddleware from '../middleware/knowtation_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  StudentMiddleware,
  UserMiddleware,
  KnowtationMiddleware
);

export default RootMiddleware;
