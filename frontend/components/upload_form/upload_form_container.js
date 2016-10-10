import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  uploadModalOn: state.modal.uploadModalOn
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
