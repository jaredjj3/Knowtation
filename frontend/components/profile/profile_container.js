import { connect } from 'react-redux';
import Profile from './profile';
import { requestUser, receiveUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  username: state.user.username,
  userType: state.user.userType,
  country: state.user.country,
  bio: state.user.bio
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
