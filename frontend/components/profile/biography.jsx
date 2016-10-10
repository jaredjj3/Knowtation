import React from 'react';
import UpdatePicture from './update_picture';
import BiographyText from './biography_text';
import Modal from 'react-modal';
import { updateUserProfilePicture } from '../../util/user_api_util';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePictureFile: null,
      profilePictureUrl: null,
      profilePictureBorders: 'gray-borders',
      pictureFormClass: 'disabled-picture-form'
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.statePictureFileName = this.statePictureFileName.bind(this);
    this.handleBrowseClick = this.handleBrowseClick.bind(this);
  }

  statePictureFileName() {
    const { profilePictureFile } = this.state;
    return profilePictureFile === null ? 'none' : profilePictureFile.name;
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        profilePictureFile: file,
        profilePictureUrl: fileReader.result,
        profilePictureBorders: 'yellow-borders'
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[profile_picture]', this.state.profilePictureFile);
    const id = this.props.pageUser.id;
    const callback = () => {
      this.setState({
        profilePictureBorders: 'gray-borders'
      });
      this.toggleForm(e);
    };
    updateUserProfilePicture(
      formData,
      id,
      callback
    );
  }

  handleBrowseClick(e) {
    document.getElementById('file-browse-input').click();
  }

  toggleForm(e) {
    const { pictureFormClass } = this.state;
    const klass = pictureFormClass === 'disabled-picture-form' ?
      'enabled-picture-form' : 'disabled-picture-form';

    this.setState({
      pictureFormClass: klass
    });
  }


  componentWillReceiveProps(newProps) {
    this.setState({
      profilePictureUrl: newProps.pageUser.profilePictureUrl
    });
  }

  render() {
    const { currentUser, pageUser, updateUser } = this.props;

    let toggleFormCallback;
    if (currentUser.id === pageUser.id ) {
      toggleFormCallback = this.toggleForm;
    } else {
      toggleFormCallback = () => {};
    }

    return(
      <div className="biography-container group">
        <div className="biography">
          <div className="profile-picture-container">
            <img
              id="profile-picture"
              className={
                this.state.profilePictureBorders + " profile-picture"
              }
              src={ this.state.profilePictureUrl }
              onClick={ toggleFormCallback }
            />
            <UpdatePicture
              callback={ toggleFormCallback }
              currentUser={ currentUser }
              pageUser={ pageUser }
            />
          </div>
          <BiographyText
            currentUser={ currentUser }
            pageUser={ pageUser }
            updateUser={ updateUser }
          />
        </div>
        <form
          id='profile-picture-form'
          className={ this.state.pictureFormClass }
        >
          <input
            id='file-browse-input'
            className='hide-button'
            type="file"
            onChange={ this.updateFile }
          />

          <div className='profile-picture-browse-container'>
            <button
              className='profile-picture-browse main-button'
              onClick={ this.handleBrowseClick }
              >
              Browse
            </button>
            <span className='profile-picture-selected-file'>
              Selected file: { this.statePictureFileName() }
            </span>
          </div>

          <div className='profile-picture-cancel-container'>
            <button
              className='profile-picture-cancel main-button'
              onClick={ toggleFormCallback }
            >
              Cancel
            </button>
          </div>

          <div className='profile-picture-submit-container'>
            <button
              className='profile-picture-submit main-button'
              onClick={ this.handleSubmit }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Biography;
