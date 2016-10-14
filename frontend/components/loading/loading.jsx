import React from 'react';
import Modal from 'react-modal';
import { style } from '../../util/modal_style';

const Loading = ({ loadingModalOn }) => {

  return(
    <Modal
      className="loading-container form-container group"
      isOpen={ loadingModalOn }
      style={ style }
      >
      <div className="loader" />
    </Modal>
  );
};

export default Loading;
