import React from 'react';
import Icon from '../icon';
import Modal from 'react-modal';
import { Link } from 'react-router';
import ErrorItems from '../errors/error_items';
import style from '../../util/modal_style';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      videoUrl: '',
      thumbnailFile: null,
      thumbnailUrl: null,
      notationFile: null,
      notationUrl: null
    };
    this.handleClickOut = this.handleClickOut.bind(this);
  }
  render() {
    const { toggleModal, uploadModalOn } = this.props;

    return (
      <Modal
        className="form-container group"
        isOpen={ uploadModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
        >
        <Icon />
        <h1 className="logo">Knowtation</h1>
        
      </Modal>
    );
  }

  handleClickOut(e) {
    this.props.toggleModal('upload');
  }
}

export default UploadForm;
