import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import StudentMiddleware from '../middleware/student_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  StudentMiddleware
);

export default RootMiddleware;
