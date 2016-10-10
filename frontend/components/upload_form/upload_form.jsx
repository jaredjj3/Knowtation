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

    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePopulateClick = this.handlePopulateClick.bind(this);
    this._uploadVideoDisplay = this._uploadVideoDisplay.bind(this);
    this.handleVideoUrlChange = this.handleVideoUrlChange.bind(this);
    this._uploadThumbnailDisplay = this._uploadThumbnailDisplay.bind(this);
    this._uploadNotationDisplay = this._uploadNotationDisplay.bind(this);
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
            id="video-url-input"
            className='form-input-field'
            type='text'
            value={ this.state.videoUrl }
            placeholder='youtube video url'
            onChange={ this.handleVideoUrlChange }
          />
        </div>
        <div className='thumbnail-container group'>
          { this._uploadVideoDisplay() }
          { this._uploadThumbnailDisplay() }
          <input id='thumbnail-input' type='file' className='hide-button'/>
        </div>
        <div className='notation-container'>
          { this._uploadNotationDisplay() }
          <input id='notation-input' type='file' className='hide-button'/>
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

  handleClick(property) {

    return e => {
      console.log(property);
    };
  }

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

  focusVideoUrl(e) {
    document.getElementById('video-url-input').focus();
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

  _uploadThumbnailDisplay() {
    const { thumbnailFile } = this.state;
    if (thumbnailFile === null) {
      return(
        <div
          className='upload-thumbnail'
          onClick={ this.handleClick('thumbnail') }
        >
          <i className="material-icons">photo_camera</i>
        </div>
      );
    } else {
      return(
        <div
          onClick={ this.handleClick('thumbnail') }
          className='upload-thumbnail'
        >
          <img
            src={ this.state.thumbnailUrl }
            className='upload-thumbnail'
          />;
        </div>
      );
    }
  }

  _uploadNotationDisplay() {
    const { notationFile } = this.state;
    if (notationFile === null) {
      return(
        <div
          className='upload-notation'
          onClick={ this.handleClick('thumbnail') }
        >
          <i className="material-icons">photo_camera</i>
        </div>
      );
    } else {
      return(
        <div
          className='upload-notation'
          onClick={ this.handleClick('thumbnail') }
        >
          <img
            src={ this.state.notationUrl }
            className='upload-notation'
          />
        </div>
      );
    }
  }

  _uploadVideoDisplay() {
    const { checkedVideoUrl } = this.state;
    if (checkedVideoUrl === '') {
      return(
        <div className='upload-video'>
          <i
            className="material-icons upload-video"
            onClick={ this.focusVideoUrl }
          >
            videocam
          </i>
        </div>
      );
    } else {
      return (
        <div className='uploaded-video'>
          <iframe
            className='uploaded-video'
            src={ this.state.checkedVideoUrl }
            />
        </div>
      );
    }

  }
}

export default UploadForm;
