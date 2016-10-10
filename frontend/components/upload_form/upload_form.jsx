import React from 'react';
import Icon from '../icon';
import Modal from 'react-modal';
import { Link } from 'react-router';
import ErrorItems from '../errors/error_items';
import style from '../../util/modal_style';
import { randomYoutubeUrl, randomTitle } from '../../util/upload_random_seeds';

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

    this._uploadIcon = this._uploadIcon.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePopulateClick = this.handlePopulateClick.bind(this);
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
          <button
            className='form-submit'
            onClick={ this.handlePopulateClick }
          >
            Randomly Populate Form
          </button>
          <input
            className='upload-title form-input-field'
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
        <div className='upload-knowtation-thumbnail'>
            { this._uploadIcon() }
            <img className='upload-no-image'/>
        </div>
        </div>
        <div className='notation-container'>
          { this._uploadIcon() }
          <img className='upload-no-image' />
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

    const videoId = this._videoId(videoUrl);
    let checkedVideoUrl = '';
    if (videoId) {
      checkedVideoUrl = `https://youtube.com/v/${videoId}`.replace("watch?v=", "");
    }

    this.setState({
      videoUrl,
      checkedVideoUrl
    });
  }

  handlePopulateClick(e) {
    const videoUrl = randomYoutubeUrl();
    const videoId = this._videoId(videoUrl);
    const title = randomTitle();

    this.setState({
      title,
      videoUrl,
      checkedVideoUrl: `https://youtube.com/v/${videoId}`.replace("watch?v=", "")
    });
  }

  // private

  _videoId(url) {
    const youtubeRegex = /((https|http)?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/(.+)/;
    const matches = url.match(youtubeRegex);
    let result = '';
    if (matches !== null) {
      result = matches[4];
    }
    return result;
  }

  _uploadIcon() {
    const { thumbnailFile } = this.state;
    if (thumbnailFile === null) {
      return <i className="material-icons">add_a_photo</i>;
    } else {
      return '';
    }
  }
}

export default UploadForm;
