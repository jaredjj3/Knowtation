import { connect } from 'react-redux';
import TimeForm from './time_form';
import { toggleModal } from '../../actions/modal_actions';
import {
  deleteSyncPoint,
  updateSyncPoint,
  sortSyncPoints
} from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  timeModalOn: state.modal.timeModalOn,
  syncPointId: (state.knowtation.syncPointId - 1),
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal)),
  deleteSyncPoint: id => dispatch(deleteSyncPoint(id)),
  updateSyncPoint: id => dispatch(updateSyncPoint(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeForm);
