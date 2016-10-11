import { connect } from 'react-redux';
import KnowtationEditor from './knowtation_editor';
import {
  requestKnowtation,
  setHtmlElement
} from '../../actions/knowtation_actions';

const mapStateToPropss = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  setHtmlElement: element => dispatch(setHtmlElement(element))
});

export default connect(
  mapStateToPropss,
  mapDispatchToProps
)(KnowtationEditor);
