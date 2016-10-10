import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { toggleModal } from '../../actions/modal_actions';
import { createKnowtation } from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  uploadModalOn: state.modal.uploadModalOn
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal)),
  createKnowtation: formData => dispatch(createKnowtation(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
