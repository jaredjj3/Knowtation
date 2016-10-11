import React from 'react';
import Modal from 'react-modal';
import style from '../../util/modal_style';
import Icon from '../icon';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    const bio = this.props.pageUser.bio;
    this.state = {
      profilePictureUrl: null,
      profilePictureFile: null,
      bio: bio === null ? '' : bio
    };

    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
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
        <div className="profile-bio-container">
          <textarea
            className="profile-upload-input"
            onChange={ this.handleBioChange }
            value={ this.state.bio }
            placeholder='tell us about yourself'
          />
        </div>
        <div className='profile-form-picture-container'>
          { this._uploadPictureDisplay() }
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
    console.log(this.state);
  }

  // private

  _uploadPictureDisplay() {
    const { profilePictureFile } = this.state;
    if (profilePictureFile === null) {
      return(
        <div
          className='upload-thumbnail'
        >
          <i className="material-icons">photo_camera</i>
          <span>thumbnail</span>
        </div>
      );
    } else {
      return(
        <div className='upload-thumbnail'>
          <img
            src={ this.state.thumbnailUrl }
            className='upload-thumbnail'
          />
        </div>
      );
    }
  }

}

export default ProfileForm;
