import React from 'react';
import Modal from 'react-modal';
import style from '../../util/modal_style';
import { toTimeString, fromTimeString } from '../../util/time_string';

class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
    this.handleClickOut = this.handleClickOut.bind(this);
  }

  render() {
    const { timeModalOn, knowtation } = this.props;
    const { currentTime } = knowtation;

    return(
      <Modal
        className='time-form-container form-container'
        isOpen={ timeModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >

        <form>
          <input
            type='text'
            placeholder='time in seconds'
            className='form-input-field'
            />
        </form>
        or { toTimeString(currentTime) }

      </Modal>
    );
  }

  // event handlers

  handleClickOut(e) {
    const { timeModalOn, toggleModal } = this.props;

    if (timeModalOn) {
      toggleModal('time');
    }
  }
}

export default TimeForm;
