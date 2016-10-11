import { connect } from 'react-redux';
import ProfileForm from './proflile_form';

const mapStateToProps = state => ({
  profileModalOn: state.modal.profileModalOn,
  pageUser: state.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
