import { connect } from 'react-redux';
import Profile from './profile';
import {
  requestUser,
  receiveUser,
  updateUser
} from '../../actions/user_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const { currentUser } = state.session;
  const pageUser = state.user;
  let pageIsCurrentUser = false;
  if (currentUser && pageUser && currentUser.id === pageUser.id) {
    pageIsCurrentUser = true;
  }

  return ({
    currentUser,
    pageUser,
    pageIsCurrentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  toggleModal: modal => dispatch(toggleModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
