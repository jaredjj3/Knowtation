import { connect } from 'react-redux';
import KnowtationEditor from './knowtation_editor';
import {
  requestKnowtation,
  setElement,
  updateTime,
  setDuration,
  createSyncPoint,
  deleteSyncPoint,
  updateKnowtation,
  setAttribute,
  setSyncPoint,
  clearKnowtation,
  sortSyncPoints
} from '../../actions/knowtation_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  knowtation: state.knowtation,
  timeModalOn: state.modal.timeModalOn
});

const mapDispatchToProps = dispatch => ({
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  updateTime: currentTime => dispatch(updateTime(currentTime)),
  setDuration: duration => dispatch(setDuration(duration)),
  createSyncPoint: syncPoint => dispatch(createSyncPoint(syncPoint)),
  deleteSyncPoint: id => dispatch(deleteSyncPoint(id)),
  toggleModal: modal => dispatch(toggleModal(modal)),
  setSyncPoint: () => dispatch(setSyncPoint()),
  updateKnowtation: knowtation => dispatch(updateKnowtation(knowtation)),
  setAttribute: (attribute, value) => dispatch(setAttribute(attribute, value)),
  clearKnowtation: () => dispatch(clearKnowtation()),
  sortSyncPoints: () => dispatch(sortSyncPoints())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowtationEditor);
