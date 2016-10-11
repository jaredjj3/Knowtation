import React from 'react';
import Progress from './progress';
import Saved from './saved';
import UpdatePicture from './update_picture';
import BiographyText from './biography_text';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { pageUser } = this.props;
    this.state = {
      profilePictureFile: null,
      profilePictureUrl: null
    };
    this.handlePictureClick = this.handlePictureClick.bind(this);
  }

  componentDidMount() {
    this.props.requestUser(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.requestUser(newProps.params.id);
    }
  }

  render() {
    const {
      currentUser,
      pageUser,
      updateUser,
      toggleModal,
      pageIsCurrentUser
    } = this.props;

    return (
      <div className="profile-container">
        <div className="secondary-profile-container">
          <div className="biography-container group">
              <div className="biography-left-column">
                <div className="profile-picture-container">
                  <img
                    id="profile-picture"
                    className="profile-picture"
                    src={ pageUser.profilePictureUrl }
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
                <BiographyText props={ this.props }/>
                <Saved />
              </div>
          </div>
        </div>
      </div>
    );
  }

  // event handlers

  handlePictureClick(e) {
    const { currentUser, pageUser } = this.props;
    if (currentUser && currentUser.id === pageUser.id) {
      this.props.toggleModal('profile');
    }
  }


}

export default Profile;
