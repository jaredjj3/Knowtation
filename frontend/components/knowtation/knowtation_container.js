import { connect } from 'react-redux';
import Knowtation from './knowtation';
import { requestKnowtation } from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestKnowtation: () => dispatch(requestKnowtation(ownProps.params.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Knowtation);
