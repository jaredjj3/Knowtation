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
      checkedVideoUrl: '',
      thumbnailFile: null,
      thumbnailUrl: null,
      notationFile: null,
      notationUrl: null
    };

    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleVideoUrlChange = this.handleVideoUrlChange.bind(this);
  }
  render() {
    const { toggleModal, uploadModalOn } = this.props;

    return (
      <Modal
        className="upload-form-container form-container group"
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
            onChange={ this.handleTitleChange }
            />
          <input
            className='form-input-field'
            type='text'
            value={this.state.videoUrl}
            placeholder='youtube video url'
            onChange={ this.handleVideoUrlChange }
          />
        </div>
        <div className='thumbnail-container group'>
          <iframe
            className='upload-knowtation-video'
            src={ this.state.checkedVideoUrl }
            frameBorder="1"
          />
          <img
            className='new-knotation-thumbnail'
            src="http://xpenology.org/wp-content/themes/qaengine/img/default-thumbnail.jpg"
          />
        </div>
        <div className='notation-container'>
          <img
            className='new-knotation-thumbnail'
            src="http://xpenology.org/wp-content/themes/qaengine/img/default-thumbnail.jpg"
            />
        </div>
        <div className='upload-button-container'>
          <button className='form-submit'>
            Upload
          </button>
        </div>
      </Modal>
    );
  }

  // event handlers

  handleClickOut(e) {
    this.props.toggleModal('upload');
  }

  handleTitleChange(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  handleVideoUrlChange(e) {
    const videoUrl = e.currentTarget.value;

    let checkedVideoUrl = '';
    if (this._isYoutubeUrl(videoUrl)) {
      checkedVideoUrl = videoUrl.replace("watch?v=", "v/");
    }

    this.setState({
      videoUrl,
      checkedVideoUrl
    });
  }

  // private

  _isYoutubeUrl(url) {
    // for testing
    // https://youtu.be/LeM40ZGCvok
    const youtubeRegex = /((https|http)?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/;
    return !(url.match(youtubeRegex) === null);
  }

}

export default UploadForm;
