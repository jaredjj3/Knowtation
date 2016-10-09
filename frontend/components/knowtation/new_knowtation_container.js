import { connect } from 'react-redux';
import NewKnowtation from './new_knowtation';
import { updateVideoUrl } from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateVideoUrl: videoUrl => dispatch(updateVideoUrl(videoUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewKnowtation);
