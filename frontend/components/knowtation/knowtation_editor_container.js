import { connect } from 'react-redux';
import KnowtationEditor from './knowtation_editor';
import {
  requestKnowtation,
  setElement,
  toggleAttribute,
  updateTime,
  setDuration,
  setAttribute,
  createSyncPoint,
  deleteSyncPoint,
  updateKnowtation
} from '../../actions/knowtation_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToPropss = state => ({
  knowtation: state.knowtation,
  timeModalOn: state.modal.timeModalOn
});

const mapDispatchToProps = dispatch => ({
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  toggleAttribute: attribute => dispatch(toggleAttribute(attribute)),
  updateTime: currentTime => dispatch(updateTime(currentTime)),
  setDuration: duration => dispatch(setDuration(duration)),
  setAttribute: (attribute, value) => dispatch(setAttribute(attribute, value)),
  createSyncPoint: syncPoint => dispatch(createSyncPoint(syncPoint)),
  deleteSyncPoint: id => dispatch(deleteSyncPoint(id)),
  toggleModal: modal => dispatch(toggleModal(modal)),
  updateKnowtation: knowtation => dispatch(updateKnowtation(knowtation))
});

export default connect(
  mapStateToPropss,
  mapDispatchToProps
)(KnowtationEditor);
