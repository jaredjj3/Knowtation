import React from 'react';
import UpdatePicture from './update_picture';
import BiographyText from './biography_text';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePictureFile: null,
      profilePictureUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
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
              pageUser={ pageUser }/>
          </div>
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
