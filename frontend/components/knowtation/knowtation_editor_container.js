import { connect } from 'react-redux';
import KnowtationEditor from './knowtation_editor';
import {
  requestKnowtation,
  setElement
} from '../../actions/knowtation_actions';

const mapStateToPropss = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  setElement: (element, elementName) => dispatch(setElement(element, elementName))
});

export default connect(
  mapStateToPropss,
  mapDispatchToProps
)(KnowtationEditor);
