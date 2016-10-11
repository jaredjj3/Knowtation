import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import Icon from '../icon';
import style from '../../util/modal_style';

class TeachForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
  }

  handleClickOut() {
    const { teachModalOn, toggleModal } = this.props;

    if (teachModalOn) {
      toggleModal('teach');
    }
  }

  handleSubmit(answer) {
    const { sendApplication, toggleModal, teachModalOn } = this.props;

    return e => {
      e.preventDefault();
      if (answer === 'yes') {
        sendApplication({ answer });
      }
      if (teachModalOn) {
        toggleModal('teach');
      }
    };
  }

  render() {
    const { teachModalOn, teacherErrors } = this.props;

    return(
      <Modal
        className="teach-form form-container"
        isOpen={ teachModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <div className='logo-container'>
          <Icon />
          <h1 className="logo">Knowtation</h1>
        </div>
          <h2 className='teach-question'>
            Do you enjoy teaching guitar?
          </h2>
          <div className='teach-form-button-container'>
            <button
              onClick={ this.handleSubmit('yes') }
              className='form-submit'
            >
              yes
            </button>
            <button
              onClick={ this.handleSubmit('no') }
              className='form-submit'
            >
              no
            </button>
          </div>
      </Modal>
    );
  }
}

export default TeachForm;
