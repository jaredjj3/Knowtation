import { connect } from 'react-redux';
import TeachForm from './teach_form';
import Modal from 'react-modal';
import { toggleModal } from '../../actions/modal_actions';
import { sendApplication } from '../../actions/student_actions';

const mapStateToProps = state => ({
  modalOn: state.modal.teachModalOn,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal)),
  sendApplication: (user, application) => (
    dispatch(sendApplication(user, application))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeachForm);
