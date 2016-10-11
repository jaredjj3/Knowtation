import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { toggleModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  profileModalOn: state.modal.profileModalOn,
  pageUser: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
