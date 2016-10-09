import { connect } from 'react-redux';
import Library from './library';
import { requestAllKnowtations } from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  knowtations: state.knowtations
});

const mapDispatchToProps = dispatch => ({
  requestAllKnowtations: () => dispatch(requestAllKnowtations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
