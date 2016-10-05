import React from 'react';
import Modal from 'react-modal';

class TeachForm extends React.Component {

  render() {

    return(
      <Modal
        className="teach-form-container"
        isOpen={ modalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >

      </Modal>
    );
  }
}

export default TeachForm;
