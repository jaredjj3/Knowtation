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
        className="upload-form-container group"
        isOpen={ uploadModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
        >
        <div className="logo-container">
          <Icon />
          <h1 className="logo">Knowtation</h1>
        </div>
        <div className='form-input-container'>
          <input
            className='form-input-field'
            type='text'
            value={this.state.title}
            placeholder='title'
            onChange={ this.handleChange('title') }
            />
          <input
            className='form-input-field'
            type='text'
            value={this.state.videoUrl}
            placeholder='video url'
            onChange={ this.handleChange('videoUrl') }
            />
          <button
            className='main-button'
            >
            validate video url
          </button>
        </div>
        <div className='thumbnail-container'>
          <img
            className='new-knotation-thumbnail'
            src="http://xpenology.org/wp-content/themes/qaengine/img/default-thumbnail.jpg"
            />
          <button
            className='main-button'
            >
            upload thumbnail
          </button>
        </div>
        <div className='notation-container'>
          <img
            className='new-knotation-thumbnail'
            src="http://xpenology.org/wp-content/themes/qaengine/img/default-thumbnail.jpg"
            />
          <button
            className='main-button'
            >
            upload notation
          </button>
        </div>
      </Modal>
    );
  }


  // event handlers

  handleClickOut(e) {
    this.props.toggleModal('upload');
  }

  handleChange(property) {
    return e => {
      this.setState({
        [property]: e.currentTarget.value
      });
    };
  }
}

export default UploadForm;
