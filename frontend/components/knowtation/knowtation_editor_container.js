import { connect } from 'react-redux';
import KnowtationEditor from './knowtation_editor';
import {
  requestKnowtation,
  setElement,
  togglePlaying,
  updateTime,
  setDuration
} from '../../actions/knowtation_actions';

const mapStateToPropss = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  togglePlaying: () => dispatch(togglePlaying()),
  updateTime: currentTime => dispatch(updateTime(currentTime)),
  setDuration: duration => dispatch(setDuration(duration))
});

export default connect(
  mapStateToPropss,
  mapDispatchToProps
)(KnowtationEditor);
