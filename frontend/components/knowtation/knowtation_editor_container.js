import { connect } from 'react-redux';
import KnowtationEditor from './knowtation_editor';
import {
  requestKnowtation,
  setElement,
  togglePlaying,
  updateTime,
  setDuration,
  setAttribute,
  createSyncPoint,
  deleteSyncPoint
} from '../../actions/knowtation_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToPropss = state => ({
  knowtation: state.knowtation,
  timeModalOn: state.modal.timeModalOn
});

const mapDispatchToProps = dispatch => ({
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  togglePlaying: () => dispatch(togglePlaying()),
  updateTime: currentTime => dispatch(updateTime(currentTime)),
  setDuration: duration => dispatch(setDuration(duration)),
  setAttribute: (attribute, value) => dispatch(setAttribute(attribute, value)),
  createSyncPoint: syncPoint => dispatch(createSyncPoint(syncPoint)),
  deleteSyncPoint: id => dispatch(deleteSyncPoint(id)),
  toggleModal: modal => dispatch(toggleModal(modal))
});

export default connect(
  mapStateToPropss,
  mapDispatchToProps
)(KnowtationEditor);