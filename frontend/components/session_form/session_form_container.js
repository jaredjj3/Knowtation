import { connect } from 'react-redux';
import SessionForm  from './session_form';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  let formType;
  if (state.modal.loginModalOn) {
    formType = 'login';
  } else if (state.modal.signupModalOn) {
    formType = 'signup';
  } else {
    formType = null;
  }

  return ({
    formType,
    currentUser: state.session.currentUser,
    sessionErrors: state.errors.sessionErrors,
    usernameErrors: state.errors.usernameErrors,
    passwordErrors: state.errors.passwordErrors,
    loginModalOn: state.modal.loginModalOn,
    signupModalOn: state.modal.signupModalOn
  });
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  toggleModal: modal => dispatch(toggleModal(modal))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
