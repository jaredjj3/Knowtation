import React from 'react';
import Icon from '../icon';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import ErrorItems from '../errors/error_items';
import { style } from '../../util/modal_style';
import { randomYoutubeUrl, randomTitle } from '../../util/upload_random_seeds';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      videoUrl: '',
      youtubeId: '',
      checkedVideoUrl: '',
      thumbnailFile: null,
      thumbnailUrl: null,
      notationFile: null,
      notationUrl: null,
      submitDisabled: true
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePopulateClick = this.handlePopulateClick.bind(this);
    this._uploadVideoDisplay = this._uploadVideoDisplay.bind(this);
    this.handleVideoUrlChange = this.handleVideoUrlChange.bind(this);
    this._uploadThumbnailDisplay = this._uploadThumbnailDisplay.bind(this);
    this._uploadNotationDisplay = this._uploadNotationDisplay.bind(this);
  }

  componentDidUpdate() {
    if (this.state.submitDisabled && this._fieldsAreFilled()) {
      this.setState({ submitDisabled: false });
    }
  }

  render() {
    const { toggleModal, uploadModalOn } = this.props;
    const { submitDisabled } = this.state;
    const submitClass = submitDisabled ? ' disabled-button' : '';

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
            Fill Form
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
          <input
            id='thumbnail-input'
            type='file'
            className='hide-button'
            onChange={ this.updateFile('thumbnail') }
          />
        </div>
        <div className='notation-container'>
          { this._uploadNotationDisplay() }
          <input
            id='notation-input'
            type='file'
            className='hide-button'
            onChange={ this.updateFile('notation') }
          />
        </div>
        <div className='upload-button-container'>
          <button
            type="button"
            className={ 'form-submit' + submitClass }
            disabled={ this.state.submitDisabled }
            onClick={ this.handleUploadClick }>
            Upload
          </button>
        </div>
      </Modal>
    );
  }

  // event handlers

  handleUploadClick(e) {
    const {
      title,
      youtubeId,
      thumbnailFile,
      notationFile
    } = this.state;

    const formData = new FormData();
    formData.append('knowtation[notation_image]', notationFile);
    formData.append('knowtation[thumbnail]', thumbnailFile);
    formData.append('knowtation[title]', title);
    formData.append('knowtation[video_url]', youtubeId);

    this.props.createKnowtation(formData);
  }

  handleClick(property) {

    return e => {
      document.getElementById(`${property}-input`).click();
    };
  }

  handleClickOut(e) {
    this._clearStateAndToggleModal();
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
    let youtubeId = '';

    if (videoId) {
      youtubeId = videoId.replace("watch?v=", "");
      checkedVideoUrl = `https://youtube.com/embed/${youtubeId}`;
    }

    this.setState({
      videoUrl,
      checkedVideoUrl,
      youtubeId
    });
  }

  handlePopulateClick(e) {
    const videoUrl = randomYoutubeUrl();
    const videoId = this._videoId(videoUrl);
    const title = randomTitle();
    const youtubeId = videoId.replace("watch?v=", "");


    this.setState({
      title,
      videoUrl,
      youtubeId,
      checkedVideoUrl: `https://youtube.com/embed/${youtubeId}`
    });
  }

  focusVideoUrl(e) {
    document.getElementById('video-url-input').focus();
  }

  updateFile(property) {

    return e => {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      const keyUrl = `${property}Url`;
      const keyFile = `${property}File`;

      fileReader.onloadend = () => {
        this.setState({
          [keyFile]: file,
          [keyUrl]: fileReader.result
        });
      };

      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  // private

  _clearStateAndToggleModal() {
    this.setState({
      title: '',
      videoUrl: '',
      checkedVideoUrl: '',
      thumbnailFile: null,
      thumbnailUrl: null,
      notationFile: null,
      notationUrl: null,
      submitDisabled: true
    });
    this.props.toggleModal('upload');
  }

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
          <span>thumbnail</span>
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
          />
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
          onClick={ this.handleClick('notation') }
        >
          <i className="material-icons">photo_camera</i>
          <span>notation</span>
        </div>
      );
    } else {
      return(
        <div
          className='upload-notation'
          onClick={ this.handleClick('notation') }
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
        <div
          className='upload-video'
          onClick={ this.focusVideoUrl }
        >
          <i
            className="material-icons"
          >
            videocam
          </i>
          <span>video</span>
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

  _fieldsAreFilled() {
    const {
      title,
      videoUrl,
      checkedVideoUrl,
      thumbnailFile,
      thumbnailUrl,
      notationFile,
      notationUrl
    } = this.state;

    return (
      Boolean(title && checkedVideoUrl &&
      thumbnailFile && thumbnailUrl &&
      notationFile && notationUrl)
    );
  }

}

export default UploadForm;
