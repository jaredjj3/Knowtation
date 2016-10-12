import { connect } from 'react-redux';
import TimeForm from './time_form';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  timeModalOn: state.modal.timeModalOn,
  syncPointId: (state.syncPointId - 1),
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeForm);
