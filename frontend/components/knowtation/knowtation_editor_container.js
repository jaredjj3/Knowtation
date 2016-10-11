import { connect } from 'react-redux';
import KnowtationEditor from './knowtation_editor';

const mapStateToPropss = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToPropss,
  mapDispatchToProps
)(KnowtationEditor);
