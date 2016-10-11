import { connect } from 'react-redux';
import Profile from './profile';
import {
  requestUser,
  receiveUser,
  updateUser
} from '../../actions/user_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  pageUser: state.user
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  toggleModal: modal => dispatch(toggleModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
