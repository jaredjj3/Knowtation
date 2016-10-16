import { connect } from 'react-redux';
import Navigation from './navigation';
import { logout, receiveUser } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notices: state.notices
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    toggleModal: modal => dispatch(toggleModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
