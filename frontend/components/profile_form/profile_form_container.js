import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  profileModalOn: state.modal.profileModalOn,
  pageUser: state.user
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
