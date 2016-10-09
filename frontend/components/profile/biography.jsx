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
      profilePictureUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('user[profile_picture]', this.state.profilePictureFile);
    const logResponse = response => console.log(response);
    const id = this.props.pageUser.id;
    updateUserProfilePicture(formData, id, logResponse);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      profilePictureUrl: newProps.pageUser.profilePictureUrl
    });
  }

  render() {
    const { currentUser, pageUser, updateUser } = this.props;

    return(
      <div className="biography-container group">
        <div className="biography">
          <div className="profile-picture-container">
            <img
              className="profile-picture"
              src={ this.state.profilePictureUrl }
            />
            <UpdatePicture
              currentUser={ currentUser }
              pageUser={ pageUser }
            />
          </div>
          <form onSubmit={ this.handleSubmit }>
            <input type="file" onChange={ this.updateFile }/>
            <input type="submit" />
          </form>
          <BiographyText
            currentUser={ currentUser }
            pageUser={ pageUser }
            updateUser={ updateUser }
          />
        </div>
      </div>
    );
  }
}

export default Biography;
