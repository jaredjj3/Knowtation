import { connect } from 'react-redux';
import SessionForm  from './session_form';
import { login, signup, toggleModal } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  sessionErrors: state.errors.sessionErrors,
  usernameErrors: state.errors.usernameErrors,
  passwordErrors: state.errors.passwordErrors,
  modalOn: state.session.modalOn
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
