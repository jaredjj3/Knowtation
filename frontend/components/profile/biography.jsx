import React from 'react';
import UpdatePicture from './update_picture';
import BiographyText from './biography_text';
import Modal from 'react-modal';
import { updateUserProfilePicture } from '../../util/user_api_util';
import Progress from './progress';
import Saved from './saved';


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
    this.statePictureFileName = this.statePictureFileName.bind(this);
    this.handleBrowseClick = this.handleBrowseClick.bind(this);
    this.handlePictureClick = this.handlePictureClick.bind(this);
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

  handlePictureClick(e) {
    const { currentUser, pageUser } = this.props;
    if (currentUser && currentUser.id === pageUser.id) {
      this.props.toggleModal('profile');
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      profilePictureUrl: newProps.pageUser.profilePictureUrl
    });
  }

  render() {
    const { currentUser, pageUser, updateUser, toggleModal } = this.props;

    return(
      <div className="biography-container group">

          <div className="biography-left-column">
            <div className="profile-picture-container">
              <img
                id="profile-picture"
                className={
                  this.state.profilePictureBorders + " profile-picture"
                }
                src={ this.state.profilePictureUrl }
                onClick={ this.handlePictureClick }
              />
              <UpdatePicture
                currentUser={ currentUser }
                pageUser={ pageUser }
                toggleModal={ toggleModal }
              />
            </div>
            <Progress pageUser={ pageUser }/>
          </div>

          <div className="biography-right-column">
            <BiographyText
              currentUser={ currentUser }
              pageUser={ pageUser }
              updateUser={ updateUser }
              toggleModal={ toggleModal }
            />
            <Saved />
          </div>

      </div>
    );
  }
}

export default Biography;
