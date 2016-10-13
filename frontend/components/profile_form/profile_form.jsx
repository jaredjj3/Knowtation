import React from 'react';
import Modal from 'react-modal';
import { style } from '../../util/modal_style';
import Icon from '../icon';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    const { pageUser } = this.props;
    const bio = pageUser.bio;
    this.state = {
      profilePictureUrl: null,
      profilePictureFile: null,
      bio: bio === null ? '' : bio
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleBrowseClick = this.handleBrowseClick.bind(this);
  }

  render() {
    const { profileModalOn } = this.props;

    return(
      <Modal
        className='profile-form-container form-container group'
        isOpen={ profileModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <Icon />
        <h1 className="logo">Knowtation</h1>
        <div className='profile-form-picture-container'>
          { this._uploadPictureDisplay() }
          <input
            onChange={ this.updateFile }
            id='profile-form-browse'
            type='file'
            className='hide-button'
            />
        </div>
        <div className="profile-bio-container">
          <textarea
            className="profile-upload-input"
            onChange={ this.handleBioChange }
            value={ this.state.bio }
            placeholder='tell us about yourself'
          />
        </div>
        <button
          className='form-submit'
          onClick={ this.handleSubmitClick }
          >
          Update
        </button>
      </Modal>
    );
  }

  // event hanlders

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        profilePictureFile: file,
        profilePictureUrl: fileReader.result
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleClickOut(e) {
    const { profileModalOn } = this.props;
    if (profileModalOn) {
      this.props.toggleModal('profile');
    }
  }

  handleBioChange(e) {
    this.setState({
      bio: e.currentTarget.value
    });
  }

  handleSubmitClick(e) {
    const {
      profileModalOn,
      toggleModal,
      updateUserWithImage,
      currentUser
    } = this.props;
    const { bio, profilePictureFile } = this.state;

    const formData = new FormData();
    formData.append('user[profile_picture]', profilePictureFile);
    formData.append('user[bio]', bio);

    updateUserWithImage(formData, currentUser.id);

    if (profileModalOn) {
      toggleModal('profile');
    }
  }

  handleBrowseClick(e) {
    document.getElementById('profile-form-browse').click();
  }

  // private

  _uploadPictureDisplay() {
    const {
      profilePictureFile,
      profilePictureUrl
    } = this.state;

    if (profilePictureFile === null) {
      return(
        <div
          className='profile-form-thumbnail'
          onClick={ this.handleBrowseClick }
        >
          <i className="material-icons">photo_camera</i>
          <span>profile picture</span>
        </div>
      );
    } else {
      return(
        <div
          className='profile-form-thumbnail'
          onClick={ this.handleBrowseClick }
        >
          <img
            src={ profilePictureUrl }
            className='profile-form-thumbnail'
          />
        </div>
      );
    }
  }

}

export default ProfileForm;
